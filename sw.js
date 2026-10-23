/* Service Worker der Team-App: NUR fuer Mitteilungen (Push). Kein Zwischen-
   speichern von Seiten oder Daten - die App laedt wie bisher frisch, und
   nichts aus /storage/ oder /rest/ bleibt auf dem Handy liegen (Elke). */
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(self.clients.claim()); });
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : "" }; }
  const title = d.title || "THE GERMAN";
  e.waitUntil(self.registration.showNotification(title, {
    body: d.body || "", icon: d.icon || undefined, tag: d.tag || "tg", renotify: !!d.tag,
    data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./";
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) { if ("focus" in c) { c.navigate && c.navigate(url); return c.focus(); } }
    return self.clients.openWindow(url);
  }));
});
