export const menuIIFE = (() => {
    const setMenu = (popupId) => {
        const options = document.querySelector(".options");
        const popupMenu = document.querySelector(`.${popupId}`);
        if (!popupMenu) return;
        
        options.addEventListener("click", (e) => {
            e.stopPropagation();
            popupMenu.style.display = "block";
        });

        document.addEventListener("click", () => {
            if (popupMenu.style.display === "block") {
                popupMenu.style.display = "none";
            }
        });

        popupMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log(e.target.dataset.option);
            popupMenu.style.display = "none";
        });
    };

    return {
        setMenu
    }
})();