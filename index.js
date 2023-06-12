const api = require("./api.json")

function sort(a) {
    a[Math.floor(Math.random() * a.length)]
}

function kiss() {
    sort(api.kiss)
}
function hug() {
    sort(api.hug)
}
function cry() {
    sort(api.cry)
}
function pat() {
    sort(api.pat)
}
function memes() {
    sort(api.memes)
}
function slap() {
    sort(api.slap)
}
function tickle() {
    sort(api.tickle)
}
function cuddle() {
    sort(api.cuddle)
}
function feed() {
    sort(api.feed)
}
function poke() {
    sort(api.poke)
}

module.exports = {
    cuddle, feed, poke, tickle, slap, memes, pat, cry, hug, kiss
}