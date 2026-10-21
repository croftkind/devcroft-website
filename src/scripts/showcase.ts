document
  .querySelectorAll<HTMLElement>("[data-showcase]")
  .forEach((showcase) => {
    const tabs = Array.from(
      showcase.querySelectorAll<HTMLButtonElement>("[data-feature-tab]"),
    );
    const panels = Array.from(
      showcase.querySelectorAll<HTMLElement>("[data-feature-panel]"),
    );
    const counter = showcase.querySelector<HTMLElement>("[data-feature-count]");
    const status = showcase.querySelector<HTMLElement>("[data-feature-status]");
    let active = 0;

    function selectFeature(index: number, focus = false) {
      active = (index + tabs.length) % tabs.length;
      tabs.forEach((tab, i) => {
        tab.setAttribute("aria-selected", String(i === active));
        tab.tabIndex = i === active ? 0 : -1;
        panels[i].hidden = i !== active;
      });
      if (counter)
        counter.textContent = `${String(active + 1).padStart(2, "0")} / ${String(tabs.length).padStart(2, "0")}`;
      if (status)
        status.textContent = `${tabs[active].textContent?.trim()}, feature ${active + 1} of ${tabs.length}`;
      if (focus) tabs[active].focus({ preventScroll: true });
      // Scroll only the tab strip; switching slides should never move the page.
      const strip = tabs[active].parentElement;
      if (strip) {
        const tab = tabs[active];
      const left = tab.offsetLeft;
        if (left < strip.scrollLeft) strip.scrollLeft = left;
        else if (
          left + tab.offsetWidth >
          strip.scrollLeft + strip.clientWidth
        ) {
          strip.scrollLeft = left + tab.offsetWidth - strip.clientWidth;
        }
      }
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectFeature(index));
      tab.addEventListener("keydown", (event) => {
        let next: number;
        switch (event.key) {
          case "ArrowRight":
            next = active + 1;
            break;
          case "ArrowLeft":
            next = active - 1;
            break;
          case "Home":
            next = 0;
            break;
          case "End":
            next = tabs.length - 1;
            break;
          default:
            return;
        }
        event.preventDefault();
        selectFeature(next, true);
      });
    });
    showcase
      .querySelector("[data-feature-prev]")
      ?.addEventListener("click", () => selectFeature(active - 1));
    showcase
      .querySelector("[data-feature-next]")
      ?.addEventListener("click", () => selectFeature(active + 1));
  });

document
  .querySelectorAll<HTMLButtonElement>("[data-screenshot]")
  .forEach((button) => {
    const dialog = document.getElementById(
      `screenshot-${button.dataset.screenshot}`,
    ) as HTMLDialogElement | null;
    button.addEventListener("click", () => dialog?.showModal());
    dialog?.addEventListener("close", () =>
      button.focus({ preventScroll: true }),
    );
    dialog?.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        dialog.close();
      }
    });
  });

document
  .querySelectorAll<HTMLAnchorElement>("[data-download]")
  .forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const status = document.querySelector("#download-status");
      if (status)
        status.textContent = `${link.dataset.download} downloads are coming soon. You can build Devcroft from source today.`;
    });
  });
