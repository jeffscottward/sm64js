// Chuckya

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_BILLBOARD, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_ASM, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    chuckya_seg8_dl_0800ABE8, chuckya_seg8_dl_0800A5F8, chuckya_seg8_dl_0800A998,
    chuckya_seg8_dl_0800A758, chuckya_seg8_dl_0800A068, chuckya_seg8_dl_0800A1D0,
    chuckya_seg8_dl_0800A428, chuckya_seg8_dl_0800A338, chuckya_seg8_dl_0800A510,
    chuckya_seg8_dl_0800A8D0
} from "./model.inc"

import {
    geo_update_held_mario_pos
} from "../../game/behaviors/king_bobomb.inc"


// 0x0F0001D8
export const chuckya_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 281, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chuckya_seg8_dl_0800ABE8),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 113, -152, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 74, 0, 0, null),
                                    GEO_OPEN_NODE(),
                                        GEO_ANIMATED_PART(LAYER_OPAQUE, 96, 0, 0, null),
                                        GEO_OPEN_NODE(),
                                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                            GEO_OPEN_NODE(),
                                                GEO_BILLBOARD(),
                                                GEO_OPEN_NODE(),
                                                    GEO_DISPLAY_LIST(LAYER_ALPHA, chuckya_seg8_dl_0800A5F8),
                                                GEO_CLOSE_NODE(),
                                            GEO_CLOSE_NODE(),
                                        GEO_CLOSE_NODE(),
                                    GEO_CLOSE_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chuckya_seg8_dl_0800A998),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, chuckya_seg8_dl_0800A758),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_BILLBOARD(),
                                GEO_OPEN_NODE(),
                                    GEO_DISPLAY_LIST(LAYER_ALPHA, chuckya_seg8_dl_0800A068),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 1, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 209, 0, 0, null),
                                    GEO_OPEN_NODE(),
                                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                        GEO_OPEN_NODE(),
                                            GEO_BILLBOARD(),
                                            GEO_OPEN_NODE(),
                                                GEO_DISPLAY_LIST(LAYER_ALPHA, chuckya_seg8_dl_0800A1D0),
                                            GEO_CLOSE_NODE(),
                                        GEO_CLOSE_NODE(),
                                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                        GEO_OPEN_NODE(),
                                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                            GEO_OPEN_NODE(),
                                                GEO_ANIMATED_PART(LAYER_OPAQUE, 95, 0, 0, null),
                                                GEO_OPEN_NODE(),
                                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                                    GEO_OPEN_NODE(),
                                                        GEO_BILLBOARD(),
                                                        GEO_OPEN_NODE(),
                                                            GEO_DISPLAY_LIST(LAYER_ALPHA, chuckya_seg8_dl_0800A428),
                                                        GEO_CLOSE_NODE(),
                                                    GEO_CLOSE_NODE(),
                                                GEO_CLOSE_NODE(),
                                            GEO_CLOSE_NODE(),
                                        GEO_CLOSE_NODE(),
                                    GEO_CLOSE_NODE(),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 1, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 209, 0, 0, null),
                                    GEO_OPEN_NODE(),
                                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                        GEO_OPEN_NODE(),
                                            GEO_BILLBOARD(),
                                            GEO_OPEN_NODE(),
                                                GEO_DISPLAY_LIST(LAYER_ALPHA, chuckya_seg8_dl_0800A338),
                                            GEO_CLOSE_NODE(),
                                        GEO_CLOSE_NODE(),
                                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                        GEO_OPEN_NODE(),
                                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                            GEO_OPEN_NODE(),
                                                GEO_ANIMATED_PART(LAYER_OPAQUE, 95, 0, 0, null),
                                                GEO_OPEN_NODE(),
                                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                                    GEO_OPEN_NODE(),
                                                        GEO_BILLBOARD(),
                                                        GEO_OPEN_NODE(),
                                                            GEO_DISPLAY_LIST(LAYER_ALPHA, chuckya_seg8_dl_0800A510),
                                                        GEO_CLOSE_NODE(),
                                                    GEO_CLOSE_NODE(),
                                                    GEO_ASM(0, geo_update_held_mario_pos),
                                                GEO_CLOSE_NODE(),
                                            GEO_CLOSE_NODE(),
                                        GEO_CLOSE_NODE(),
                                    GEO_CLOSE_NODE(),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chuckya_seg8_dl_0800A8D0),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619275628 - 2021-04-24 04:48:31 -1000
