const todos = "todos-site"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/icons/test.png",
    "/icons/test3.png",
    "/app.js",
    "/modules/Controller.js",
    "/modules/Model.js",
    "/modules/View.js"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(todos)
        .then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then(res => res || fetch(fetchEvent.request))
    )
})