const URL_BASE = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const URL_GAME_DETAIL = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=";

const PLATFORM = [
    { id: 0, item: 'all' },
    { id: 1, item: 'browser' },
    { id: 2, item: 'pc' },
]

const CATEGORY = [
    { id: 0, item: 'mmorpg' },
    { id: 1, item: 'shooter' },
    { id: 2, item: 'strategy' },
    { id: 3, item: 'moba' },
    { id: 4, item: 'racing' },
    { id: 5, item: 'sports' },
    { id: 6, item: 'social' },
    { id: 7, item: 'sandbox' },
    { id: 8, item: 'open-world' },
    { id: 9, item: 'survival' },
    { id: 10, item: 'pvp' },
    { id: 11, item: 'pve' },
    { id: 12, item: 'pixel' },
    { id: 13, item: 'voxel' },
    { id: 14, item: 'zombie' },
    { id: 15, item: 'turn-based' },
    { id: 16, item: 'first-person' },
    { id: 17, item: 'third-Person' },
    { id: 18, item: 'top-down' },
    { id: 19, item: 'tank' },
    { id: 20, item: 'space' },
    { id: 21, item: 'sailing' },
    { id: 22, item: 'side-scroller' },
    { id: 23, item: 'superhero' },
    { id: 24, item: 'permadeath' },
    { id: 25, item: 'card' },
    { id: 26, item: 'battle-royale' },
    { id: 27, item: 'mmo' },
    { id: 28, item: 'mmofps' },
    { id: 29, item: 'mmotps' },
    { id: 30, item: '3d' },
    { id: 31, item: '2d' },
    { id: 32, item: 'anime' },
    { id: 33, item: 'fantasy' },
    { id: 34, item: 'sci-fi' },
    { id: 35, item: 'fighting' },
    { id: 36, item: 'action-rpg' },
    { id: 37, item: 'action' },
    { id: 38, item: 'military' },
    { id: 39, item: 'martial-arts' },
    { id: 40, item: 'flight' },
    { id: 41, item: 'low-spec' },
    { id: 42, item: 'tower-defense' },
    { id: 43, item: 'horror' },
    { id: 44, item: 'mmorts' },
].sort(function (a, b) {
    if (a.item < b.item) {
        return -1;
    }
    if (a.item > b.item) {
        return 1;
    }
    return 0;
});

const SORT_BY = [
    { id: 1, item: 'alphabetical' },
    { id: 2, item: 'popularity' },
    { id: 3, item: 'release-date' },
    { id: 4, item: 'relevance' },
]

const OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "35a4fc8af3mshaa613f45a1e5bdep185f27jsn697ec9e4ccaf",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
};

export { URL_BASE, URL_GAME_DETAIL, OPTIONS, PLATFORM, CATEGORY, SORT_BY }
