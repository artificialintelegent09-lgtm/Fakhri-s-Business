import { useSyncExternalStore } from "react";
import { dictionaries, type Lang } from "@/data/dictionaries";

const STORAGE_KEY = "riwed-lang";
const listeners = new Set<() => void>();

/** In-memory copy so switching still works when localStorage is blocked. */
let current: Lang | null = null;

function readStored(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = () => {
    current = null;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Lang {
  return (current ??= readStored());
}

// Indonesian is the default and what the server renders.
const getServerSnapshot = (): Lang => "id";

export function setLang(lang: Lang) {
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Selection still applies for this visit.
  }
  notify();
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { lang, t: dictionaries[lang], setLang };
}
