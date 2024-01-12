self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
        ]),
      ),
  );
});
self.addEventListener("activate", (event) => {});

onactivate = (event) => {};
