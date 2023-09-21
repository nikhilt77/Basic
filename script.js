document.addEventListener("DOMContentLoaded", () => {
    const loadEpisodesButton = document.getElementById("loadEpisodes");
    const episodeList = document.getElementById("episodeList");

    loadEpisodesButton.addEventListener("click", () => {
        // Simulate loading episodes (replace with actual data)
        const episodes = [
            "Episode 1: Pilot",
            "Episode 2: Purple Giraffe",
            "Episode 3: Sweet Taste of Liberty",
            // ... add more episodes ...
        ];

        // Clear existing list
        episodeList.innerHTML = "";

        // Populate episode list
        episodes.forEach((episode) => {
            const listItem = document.createElement("li");
            listItem.textContent = episode;
            episodeList.appendChild(listItem);
        });
    });
});
