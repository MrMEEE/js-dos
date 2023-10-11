import { Dispatch } from "@reduxjs/toolkit";
import { nonSerializableStore } from "../non-serializable-store";
import { uiSlice } from "../store/ui";

export function browserSetFullScreen(fullScreen: boolean, dispatch: Dispatch) {
    const root = nonSerializableStore.root as any;
    if (fullScreen) {
        if (root.requestFullscreen) {
            root.requestFullscreen();
        } else if (root.webkitRequestFullscreen) {
            root.webkitRequestFullscreen();
        } else if (root.mozRequestFullScreen) {
            root.mozRequestFullScreen();
        } else if (root.msRequestFullscreen) {
            root.msRequestFullscreen();
        } else if (root.webkitEnterFullscreen) {
            root.webkitEnterFullscreen();
        } else {
            root.classList.add("jsdos-fullscreen-workaround");
        }
    } else {
        if (root.classList.contains("jsdos-fullscreen-workaround")) {
            root.classList.remove("jsdos-fullscreen-workaround");
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
            (document as any).msExitFullscreen();
        }
    }

    dispatch(uiSlice.actions.setFullScreen(fullScreen));
}
