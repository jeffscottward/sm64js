import {
    COL_INIT,
    COL_VERTEX_INIT,
    COL_VERTEX,
    COL_TRI_INIT,
    COL_TRI,
    COL_TRI_STOP,
    COL_TRI_SPECIAL,
    COL_SPECIAL_INIT,
    COL_WATER_BOX,
    COL_WATER_BOX_INIT,
    COL_END,
    SPECIAL_OBJECT,
    SPECIAL_OBJECT_WITH_YAW,

    SURFACE_DEFAULT,
    SURFACE_HANGABLE,
    SURFACE_SLIPPERY,
    SURFACE_VERY_SLIPPERY,
    SURFACE_NOT_SLIPPERY,
    SURFACE_WALL_MISC,
    SURFACE_NOISE_DEFAULT,
    SURFACE_NOISE_SLIPPERY,
    SURFACE_CLOSE_CAMERA,
    SURFACE_CAMERA_ROTATE_LEFT,
    SURFACE_BOSS_FIGHT_CAMERA,
    SURFACE_DEATH_PLANE,
	
	special_level_geo_0E,
	special_level_geo_0F,
	special_level_geo_11,
	special_level_geo_12,
	
    special_bubble_tree,
	
} from "../../../../include/surface_terrains"

export const wf_seg7_collision_070102D8 = [
    ...COL_INIT(),
    ...COL_VERTEX_INIT(0x1A6),
    ...COL_VERTEX(3584, 2304, -511),
    ...COL_VERTEX(3226, 2304, 0),
    ...COL_VERTEX(3584, 2304, 0),
    ...COL_VERTEX(3226, 2304, -511),
    ...COL_VERTEX(4096, 1075, -4095),
    ...COL_VERTEX(3226, 1075, -3071),
    ...COL_VERTEX(4096, 1075, -3071),
    ...COL_VERTEX(2458, 1075, -4095),
    ...COL_VERTEX(2458, 1075, -3071),
    ...COL_VERTEX(1536, 3584, -1023),
    ...COL_VERTEX(1024, 3584, -511),
    ...COL_VERTEX(1536, 3584, 1024),
    ...COL_VERTEX(-423, 3584, -1959),
    ...COL_VERTEX(-1023, 3584, 1536),
    ...COL_VERTEX(-1023, 3584, -511),
    ...COL_VERTEX(1024, 3584, 1536),
    ...COL_VERTEX(4096, 512, 3840),
    ...COL_VERTEX(3226, 512, 3840),
    ...COL_VERTEX(3226, 512, 4096),
    ...COL_VERTEX(4096, 512, 4096),
    ...COL_VERTEX(5120, 256, 4096),
    ...COL_VERTEX(2048, 256, 4096),
    ...COL_VERTEX(2048, 256, 5120),
    ...COL_VERTEX(2560, 256, 5632),
    ...COL_VERTEX(4608, 256, 5632),
    ...COL_VERTEX(5120, 256, 5120),
    ...COL_VERTEX(4608, 256, -511),
    ...COL_VERTEX(4096, 256, -511),
    ...COL_VERTEX(4096, 256, 3072),
    ...COL_VERTEX(5120, 256, 0),
    ...COL_VERTEX(4480, 256, 3840),
    ...COL_VERTEX(1117, 3584, -2639),
    ...COL_VERTEX(4480, 256, 4096),
    ...COL_VERTEX(733, 3584, -2255),
    ...COL_VERTEX(861, 3584, -2127),
    ...COL_VERTEX(1245, 3584, -2511),
    ...COL_VERTEX(1373, 3584, -2383),
    ...COL_VERTEX(1373, 3584, -2767),
    ...COL_VERTEX(989, 3584, -2767),
    ...COL_VERTEX(3226, 2432, 0),
    ...COL_VERTEX(2560, 2432, 0),
    ...COL_VERTEX(2560, 2304, 0),
    ...COL_VERTEX(3226, 2432, -40),
    ...COL_VERTEX(3226, 2452, -19),
    ...COL_VERTEX(2048, 2688, 0),
    ...COL_VERTEX(2048, 2560, 0),
    ...COL_VERTEX(3226, 2304, -40),
    ...COL_VERTEX(2048, 2560, 1024),
    ...COL_VERTEX(2048, 2688, 1024),
    ...COL_VERTEX(2007, 2560, 1024),
    ...COL_VERTEX(2028, 2708, 0),
    ...COL_VERTEX(2048, 2708, -19),
    ...COL_VERTEX(2007, 2688, 1024),
    ...COL_VERTEX(2028, 2708, 1024),
    ...COL_VERTEX(2007, 2688, 0),
    ...COL_VERTEX(2048, 2560, -40),
    ...COL_VERTEX(2560, 2432, -40),
    ...COL_VERTEX(2560, 2304, -40),
    ...COL_VERTEX(-2047, 2432, -1023),
    ...COL_VERTEX(-1945, 1024, 3994),
    ...COL_VERTEX(-1945, 512, 3994),
    ...COL_VERTEX(-1740, 1024, 3994),
    ...COL_VERTEX(-1740, 1024, 3789),
    ...COL_VERTEX(-1945, 1024, 3789),
    ...COL_VERTEX(-1535, 2560, 1536),
    ...COL_VERTEX(-2047, 2560, 512),
    ...COL_VERTEX(-2047, 2662, -2409),
    ...COL_VERTEX(-3276, 384, -1535),
    ...COL_VERTEX(-2508, 1024, 4096),
    ...COL_VERTEX(-3276, 384, 640),
    ...COL_VERTEX(5120, 384, 2816),
    ...COL_VERTEX(-273, 2560, -2833),
    ...COL_VERTEX(-2047, 2560, -2409),
    ...COL_VERTEX(-2508, 384, 640),
    ...COL_VERTEX(-2508, 1152, 3072),
    ...COL_VERTEX(-2252, 1792, -737),
    ...COL_VERTEX(-2252, 1792, -833),
    ...COL_VERTEX(-2380, 1792, -737),
    ...COL_VERTEX(-2380, 1792, -833),
    ...COL_VERTEX(-2687, 1792, -833),
    ...COL_VERTEX(-2687, 1792, -737),
    ...COL_VERTEX(-2815, 1792, -737),
    ...COL_VERTEX(-2815, 1792, -833),
    ...COL_VERTEX(-2687, 1792, 222),
    ...COL_VERTEX(-2687, 1792, 318),
    ...COL_VERTEX(-2815, 1792, 318),
    ...COL_VERTEX(-2815, 1792, 222),
    ...COL_VERTEX(-2252, 1792, 318),
    ...COL_VERTEX(-2252, 1792, 222),
    ...COL_VERTEX(-2380, 1792, 318),
    ...COL_VERTEX(-2380, 1792, 222),
    ...COL_VERTEX(-2073, 2662, 512),
    ...COL_VERTEX(-2073, 2662, -1023),
    ...COL_VERTEX(2624, 4352, 340),
    ...COL_VERTEX(2624, 4352, 44),
    ...COL_VERTEX(2624, 4055, 340),
    ...COL_VERTEX(2881, 4352, 489),
    ...COL_VERTEX(2881, 4352, 448),
    ...COL_VERTEX(3103, 4352, 320),
    ...COL_VERTEX(2881, 4096, -63),
    ...COL_VERTEX(2659, 4352, 320),
    ...COL_VERTEX(3138, 4352, 340),
    ...COL_VERTEX(3103, 4352, 64),
    ...COL_VERTEX(3138, 4352, 44),
    ...COL_VERTEX(2881, 4352, -63),
    ...COL_VERTEX(2881, 4352, -104),
    ...COL_VERTEX(2659, 4352, 64),
    ...COL_VERTEX(2048, 2688, -40),
    ...COL_VERTEX(2007, 2560, 0),
    ...COL_VERTEX(-2047, 1792, -833),
    ...COL_VERTEX(-2047, 1792, 318),
    ...COL_VERTEX(-2047, 2432, 512),
    ...COL_VERTEX(-1945, 512, 3789),
    ...COL_VERTEX(-1740, 512, 3994),
    ...COL_VERTEX(-1740, 512, 3789),
    ...COL_VERTEX(-2047, 2662, 512),
    ...COL_VERTEX(-2047, 2560, -1023),
    ...COL_VERTEX(-2047, 2662, -1023),
    ...COL_VERTEX(-1535, 2662, 1536),
    ...COL_VERTEX(-2047, 384, -1535),
    ...COL_VERTEX(-2047, 512, -1535),
    ...COL_VERTEX(-3276, 512, -1535),
    ...COL_VERTEX(-2508, 1152, 4096),
    ...COL_VERTEX(-1023, 1152, 4096),
    ...COL_VERTEX(-1023, 1024, 4096),
    ...COL_VERTEX(-3276, 512, 640),
    ...COL_VERTEX(-2508, 512, 640),
    ...COL_VERTEX(4608, 384, 5632),
    ...COL_VERTEX(5120, 384, 5120),
    ...COL_VERTEX(5120, 256, 2816),
    ...COL_VERTEX(2560, 384, 5632),
    ...COL_VERTEX(5120, 384, 0),
    ...COL_VERTEX(4096, 384, -511),
    ...COL_VERTEX(4608, 384, -511),
    ...COL_VERTEX(2048, 384, 5120),
    ...COL_VERTEX(2048, 384, 4096),
    ...COL_VERTEX(4096, 1203, -3071),
    ...COL_VERTEX(4096, 1203, -4095),
    ...COL_VERTEX(2458, 1203, -4095),
    ...COL_VERTEX(1536, 2560, -1023),
    ...COL_VERTEX(1536, 2662, -1023),
    ...COL_VERTEX(-273, 2662, -2833),
    ...COL_VERTEX(-2508, 1024, 3072),
    ...COL_VERTEX(-2252, 2432, -737),
    ...COL_VERTEX(-2380, 2432, -737),
    ...COL_VERTEX(-2380, 2432, -833),
    ...COL_VERTEX(-2252, 2432, -833),
    ...COL_VERTEX(-2687, 2432, -737),
    ...COL_VERTEX(-2815, 2432, -737),
    ...COL_VERTEX(-2687, 2432, -833),
    ...COL_VERTEX(-2815, 2432, -833),
    ...COL_VERTEX(-2687, 2432, 318),
    ...COL_VERTEX(-2815, 2432, 318),
    ...COL_VERTEX(-2815, 2432, 222),
    ...COL_VERTEX(-2687, 2432, 222),
    ...COL_VERTEX(-2252, 2432, 318),
    ...COL_VERTEX(-2380, 2432, 318),
    ...COL_VERTEX(-2380, 2432, 222),
    ...COL_VERTEX(-2252, 2432, 222),
    ...COL_VERTEX(-2073, 2560, 512),
    ...COL_VERTEX(-2073, 2560, -1023),
    ...COL_VERTEX(2881, 4055, 489),
    ...COL_VERTEX(3138, 4055, 340),
    ...COL_VERTEX(2624, 4055, 44),
    ...COL_VERTEX(2881, 4055, -104),
    ...COL_VERTEX(3138, 4055, 44),
    ...COL_VERTEX(2659, 4096, 320),
    ...COL_VERTEX(2881, 4096, 448),
    ...COL_VERTEX(2659, 4096, 64),
    ...COL_VERTEX(3103, 4096, 320),
    ...COL_VERTEX(3103, 4096, 64),
    ...COL_VERTEX(2560, 2452, -19),
    ...COL_VERTEX(2560, 2304, -511),
    ...COL_VERTEX(2048, 2560, -1023),
    ...COL_VERTEX(2048, 2560, -511),
    ...COL_VERTEX(-2690, 1203, -34),
    ...COL_VERTEX(-2690, 1203, -783),
    ...COL_VERTEX(-2047, 1203, -783),
    ...COL_VERTEX(-2738, 1331, 13),
    ...COL_VERTEX(-2047, 1203, -34),
    ...COL_VERTEX(-2738, 1331, -831),
    ...COL_VERTEX(-2047, 1331, -831),
    ...COL_VERTEX(-2047, 1331, 13),
    ...COL_VERTEX(741, 2560, 2252),
    ...COL_VERTEX(1766, 2560, 2252),
    ...COL_VERTEX(1766, 2586, 2252),
    ...COL_VERTEX(1766, 2560, 2355),
    ...COL_VERTEX(2202, 2560, 2175),
    ...COL_VERTEX(2202, 2560, 2943),
    ...COL_VERTEX(2202, 2432, 2943),
    ...COL_VERTEX(1536, 2560, 2175),
    ...COL_VERTEX(741, 2560, 2355),
    ...COL_VERTEX(1536, 2560, 2943),
    ...COL_VERTEX(3226, 922, 3635),
    ...COL_VERTEX(3021, 922, 3635),
    ...COL_VERTEX(3021, 922, 3840),
    ...COL_VERTEX(3021, 922, 4045),
    ...COL_VERTEX(3226, 1024, 3840),
    ...COL_VERTEX(3021, 1024, 4045),
    ...COL_VERTEX(2560, 922, 2048),
    ...COL_VERTEX(3584, 1024, 3635),
    ...COL_VERTEX(1024, 2560, 1664),
    ...COL_VERTEX(1024, 922, 1664),
    ...COL_VERTEX(512, 922, 3072),
    ...COL_VERTEX(1664, 922, 1024),
    ...COL_VERTEX(3226, 1076, -3071),
    ...COL_VERTEX(3226, 2304, -1023),
    ...COL_VERTEX(-2047, 1024, 3072),
    ...COL_VERTEX(-1023, 1024, 3072),
    ...COL_VERTEX(-1023, 2025, 1536),
    ...COL_VERTEX(-1023, 1024, 4045),
    ...COL_VERTEX(-1192, 2560, 2565),
    ...COL_VERTEX(-1023, 2560, 1536),
    ...COL_VERTEX(-1023, 2560, 2565),
    ...COL_VERTEX(512, 2025, 1536),
    ...COL_VERTEX(3584, 512, 3840),
    ...COL_VERTEX(3584, 1024, 3840),
    ...COL_VERTEX(-423, 2560, -1959),
    ...COL_VERTEX(-1023, 2560, -511),
    ...COL_VERTEX(1024, 2560, -511),
    ...COL_VERTEX(2509, 2304, 0),
    ...COL_VERTEX(2509, 2304, -511),
    ...COL_VERTEX(2048, 2534, 0),
    ...COL_VERTEX(2048, 2534, -511),
    ...COL_VERTEX(1536, 2560, 1024),
    ...COL_VERTEX(1536, 2560, -511),
    ...COL_VERTEX(3584, 1075, -3071),
    ...COL_VERTEX(4096, 1075, 1536),
    ...COL_VERTEX(3712, 954, 2033),
    ...COL_VERTEX(3584, 1075, 1536),
    ...COL_VERTEX(4096, 1075, -511),
    ...COL_VERTEX(3584, 2122, -891),
    ...COL_VERTEX(512, 2560, 1536),
    ...COL_VERTEX(512, 2560, 2565),
    ...COL_VERTEX(696, 2560, 2565),
    ...COL_VERTEX(-3071, 2432, -1023),
    ...COL_VERTEX(-3071, 2560, 512),
    ...COL_VERTEX(-2047, 0, -4095),
    ...COL_VERTEX(3226, 1024, 4096),
    ...COL_VERTEX(4096, 0, -4095),
    ...COL_VERTEX(-2047, 1664, 318),
    ...COL_VERTEX(-255, 2816, 1536),
    ...COL_VERTEX(-127, 2560, 2099),
    ...COL_VERTEX(-127, 2560, 1536),
    ...COL_VERTEX(-383, 2560, 1536),
    ...COL_VERTEX(512, 1792, 3072),
    ...COL_VERTEX(-2508, 0, 640),
    ...COL_VERTEX(-2508, 0, 3072),
    ...COL_VERTEX(799, 3584, -735),
    ...COL_VERTEX(800, 2791, -735),
    ...COL_VERTEX(881, 3584, -727),
    ...COL_VERTEX(2013, 3584, -2895),
    ...COL_VERTEX(2013, 3584, -3407),
    ...COL_VERTEX(1501, 3584, -2895),
    ...COL_VERTEX(1962, 3456, -2920),
    ...COL_VERTEX(1501, 3584, -3407),
    ...COL_VERTEX(2099, 2534, 0),
    ...COL_VERTEX(2099, 2534, -511),
    ...COL_VERTEX(2150, 2509, -511),
    ...COL_VERTEX(2150, 2483, 0),
    ...COL_VERTEX(2150, 2509, 0),
    ...COL_VERTEX(2150, 2483, -511),
    ...COL_VERTEX(2202, 2458, 0),
    ...COL_VERTEX(2202, 2458, -511),
    ...COL_VERTEX(2253, 2432, -511),
    ...COL_VERTEX(2253, 2432, 0),
    ...COL_VERTEX(2304, 2406, 0),
    ...COL_VERTEX(2304, 2406, -511),
    ...COL_VERTEX(2304, 2432, 0),
    ...COL_VERTEX(2355, 2381, -511),
    ...COL_VERTEX(2355, 2381, 0),
    ...COL_VERTEX(2406, 2355, 0),
    ...COL_VERTEX(2406, 2355, -511),
    ...COL_VERTEX(2406, 2381, -511),
    ...COL_VERTEX(2458, 2330, 0),
    ...COL_VERTEX(2458, 2330, -511),
    ...COL_VERTEX(2458, 2355, 0),
    ...COL_VERTEX(5120, 0, 0),
    ...COL_VERTEX(5120, 0, 5120),
    ...COL_VERTEX(4608, 0, 5632),
    ...COL_VERTEX(2048, 0, 5120),
    ...COL_VERTEX(2560, 0, 5632),
    ...COL_VERTEX(2048, 0, 4096),
    ...COL_VERTEX(-2508, -3071, 4096),
    ...COL_VERTEX(4096, 256, 4096),
    ...COL_VERTEX(4096, 0, -511),
    ...COL_VERTEX(4608, 0, -511),
    ...COL_VERTEX(3712, 599, 3525),
    ...COL_VERTEX(3968, 599, 3401),
    ...COL_VERTEX(3712, 802, 2779),
    ...COL_VERTEX(3840, 893, 2282),
    ...COL_VERTEX(3840, 751, 2779),
    ...COL_VERTEX(4096, 1075, -2559),
    ...COL_VERTEX(3584, 1075, -2047),
    ...COL_VERTEX(4096, 1075, -2047),
    ...COL_VERTEX(4096, 1075, -1535),
    ...COL_VERTEX(4096, 1075, -1023),
    ...COL_VERTEX(3584, 1075, -1023),
    ...COL_VERTEX(3584, 1757, -2031),
    ...COL_VERTEX(3584, 1584, -2412),
    ...COL_VERTEX(3584, 1575, -2031),
    ...COL_VERTEX(3226, 1392, -2412),
    ...COL_VERTEX(3584, 1392, -2412),
    ...COL_VERTEX(3584, 2304, -891),
    ...COL_VERTEX(3584, 1939, -1271),
    ...COL_VERTEX(3584, 2122, -1271),
    ...COL_VERTEX(3584, 1757, -1651),
    ...COL_VERTEX(3584, 1939, -1651),
    ...COL_VERTEX(3584, 1396, -2602),
    ...COL_VERTEX(-2430, 1664, -190),
    ...COL_VERTEX(-2047, 1664, -833),
    ...COL_VERTEX(-2430, 1664, -320),
    ...COL_VERTEX(-2943, 1664, 318),
    ...COL_VERTEX(-2559, 1664, -190),
    ...COL_VERTEX(-2943, 1792, 318),
    ...COL_VERTEX(-2943, 1792, -833),
    ...COL_VERTEX(-2559, 1664, -320),
    ...COL_VERTEX(-2943, 1664, -833),
    ...COL_VERTEX(-3276, 0, 640),
    ...COL_VERTEX(1925, 2560, -204),
    ...COL_VERTEX(1280, 2560, -1023),
    ...COL_VERTEX(1373, 3456, -2767),
    ...COL_VERTEX(861, 3456, -2127),
    ...COL_VERTEX(1117, 3456, -2639),
    ...COL_VERTEX(1766, 2586, 2355),
    ...COL_VERTEX(741, 2586, 2252),
    ...COL_VERTEX(741, 2586, 2355),
    ...COL_VERTEX(1536, 2432, 2175),
    ...COL_VERTEX(2202, 2432, 2175),
    ...COL_VERTEX(1536, 2432, 2943),
    ...COL_VERTEX(3226, 1024, 3635),
    ...COL_VERTEX(-1023, 922, 4045),
    ...COL_VERTEX(-1023, 922, 3072),
    ...COL_VERTEX(3072, 922, 2048),
    ...COL_VERTEX(1664, 2560, 1024),
    ...COL_VERTEX(3226, 1584, -2412),
    ...COL_VERTEX(3226, 2304, -891),
    ...COL_VERTEX(-1023, 1792, 3072),
    ...COL_VERTEX(1024, 2560, 1536),
    ...COL_VERTEX(-3071, 2560, -1023),
    ...COL_VERTEX(-3071, 2432, 512),
    ...COL_VERTEX(3584, 802, 2655),
    ...COL_VERTEX(3968, 821, 2406),
    ...COL_VERTEX(2509, 2330, -511),
    ...COL_VERTEX(2509, 2330, 0),
    ...COL_VERTEX(2099, 2509, 0),
    ...COL_VERTEX(3584, 0, -511),
    ...COL_VERTEX(3584, 0, -3071),
    ...COL_VERTEX(3584, 1075, -511),
    ...COL_VERTEX(3840, 974, 1909),
    ...COL_VERTEX(4096, 0, -3071),
    ...COL_VERTEX(3226, 2122, -891),
    ...COL_VERTEX(3226, 2122, -1271),
    ...COL_VERTEX(-2047, 0, -1535),
    ...COL_VERTEX(3226, 256, 4096),
    ...COL_VERTEX(512, 0, -4095),
    ...COL_VERTEX(-2508, 0, 4096),
    ...COL_VERTEX(3226, 0, 4096),
    ...COL_VERTEX(-2047, 384, 640),
    ...COL_VERTEX(-255, 2816, 2099),
    ...COL_VERTEX(-383, 2560, 2099),
    ...COL_VERTEX(881, 2791, -727),
    ...COL_VERTEX(889, 3584, -646),
    ...COL_VERTEX(889, 2791, -646),
    ...COL_VERTEX(1962, 3456, -3381),
    ...COL_VERTEX(1552, 3456, -2920),
    ...COL_VERTEX(1552, 3456, -3381),
    ...COL_VERTEX(2099, 2509, -511),
    ...COL_VERTEX(2202, 2483, 0),
    ...COL_VERTEX(2253, 2458, 0),
    ...COL_VERTEX(2202, 2483, -511),
    ...COL_VERTEX(2253, 2458, -511),
    ...COL_VERTEX(2355, 2406, 0),
    ...COL_VERTEX(2355, 2406, -511),
    ...COL_VERTEX(2304, 2432, -511),
    ...COL_VERTEX(2406, 2381, 0),
    ...COL_VERTEX(2458, 2355, -511),
    ...COL_VERTEX(5120, 0, 4096),
    ...COL_VERTEX(2048, -3071, 4096),
    ...COL_VERTEX(3584, 1075, -2559),
    ...COL_VERTEX(4096, 0, -2047),
    ...COL_VERTEX(4096, 0, -2559),
    ...COL_VERTEX(3584, 0, -2559),
    ...COL_VERTEX(3584, 0, -2047),
    ...COL_VERTEX(3584, 1075, -1535),
    ...COL_VERTEX(4096, 0, -1535),
    ...COL_VERTEX(4096, 0, -1023),
    ...COL_VERTEX(3584, 0, -1535),
    ...COL_VERTEX(3584, 0, -1023),
    ...COL_VERTEX(3226, 1575, -2031),
    ...COL_VERTEX(3226, 1757, -2031),
    ...COL_VERTEX(3226, 1939, -1271),
    ...COL_VERTEX(3226, 1939, -1651),
    ...COL_VERTEX(3226, 1757, -1651),
    ...COL_VERTEX(3226, 1396, -2602),
    ...COL_VERTEX(-2430, 1792, -190),
    ...COL_VERTEX(-2559, 1792, -190),
    ...COL_VERTEX(-2559, 1792, -320),
    ...COL_VERTEX(-2430, 1792, -320),
    ...COL_VERTEX(-3276, 0, -1535),
    ...COL_VERTEX(1720, 2560, -204),
    ...COL_VERTEX(1720, 2560, 0),
    ...COL_VERTEX(1925, 2560, 0),
    ...COL_VERTEX(973, 2560, -1023),
    ...COL_VERTEX(1126, 2560, -869),
    ...COL_VERTEX(1126, 2560, -1177),
    ...COL_VERTEX(-2060, 2688, 512),
    ...COL_VERTEX(-2060, 2688, -1023),
    ...COL_VERTEX(1245, 3456, -2511),
    ...COL_VERTEX(1373, 3456, -2383),
    ...COL_VERTEX(733, 3456, -2255),
    ...COL_VERTEX(989, 3456, -2767),
    ...COL_VERTEX(2881, 4372, 468),
    ...COL_VERTEX(3120, 4372, 330),
    ...COL_VERTEX(3120, 4372, 54),
    ...COL_VERTEX(2881, 4372, -83),
    ...COL_VERTEX(2641, 4372, 54),
    ...COL_VERTEX(2641, 4372, 330),
    ...COL_VERTEX(8192, -3071, -8191),
    ...COL_VERTEX(-8191, -3071, -8191),
    ...COL_VERTEX(8192, -3071, 8192),
    ...COL_VERTEX(-8191, -3071, 8192),
    ...COL_TRI_INIT(SURFACE_DEFAULT, 409),
    ...COL_TRI(175, 176, 177),
    ...COL_TRI(178, 175, 179),
    ...COL_TRI(175, 177, 179),
    ...COL_TRI(180, 175, 178),
    ...COL_TRI(180, 176, 175),
    ...COL_TRI(177, 176, 180),
    ...COL_TRI(177, 180, 181),
    ...COL_TRI(178, 179, 182),
    ...COL_TRI(178, 182, 181),
    ...COL_TRI(178, 181, 180),
    ...COL_TRI(191, 326, 325),
    ...COL_TRI(183, 185, 184),
    ...COL_TRI(184, 324, 186),
    ...COL_TRI(184, 185, 324),
    ...COL_TRI(185, 325, 326),
    ...COL_TRI(183, 325, 185),
    ...COL_TRI(185, 326, 324),
    ...COL_TRI(186, 324, 326),
    ...COL_TRI(186, 326, 191),
    ...COL_TRI(187, 327, 190),
    ...COL_TRI(187, 328, 327),
    ...COL_TRI(188, 328, 187),
    ...COL_TRI(191, 325, 183),
    ...COL_TRI(188, 189, 328),
    ...COL_TRI(189, 327, 328),
    ...COL_TRI(190, 327, 329),
    ...COL_TRI(189, 329, 327),
    ...COL_TRI(190, 329, 192),
    ...COL_TRI(186, 183, 184),
    ...COL_TRI(186, 191, 183),
    ...COL_TRI(192, 189, 188),
    ...COL_TRI(192, 329, 189),
    ...COL_TRI(193, 194, 330),
    ...COL_TRI(196, 203, 331),
    ...COL_TRI(194, 197, 330),
    ...COL_TRI(194, 195, 197),
    ...COL_TRI(196, 195, 202),
    ...COL_TRI(195, 194, 202),
    ...COL_TRI(197, 196, 198),
    ...COL_TRI(196, 197, 195),
    ...COL_TRI(198, 196, 331),
    ...COL_TRI(196, 202, 203),
    ...COL_TRI(193, 330, 1),
    ...COL_TRI(199, 193, 333),
    ...COL_TRI(200, 330, 197),
    ...COL_TRI(193, 199, 202),
    ...COL_TRI(199, 204, 202),
    ...COL_TRI(201, 202, 204),
    ...COL_TRI(202, 194, 193),
    ...COL_TRI(204, 199, 47),
    ...COL_TRI(3, 206, 172),
    ...COL_TRI(3, 172, 41),
    ...COL_TRI(205, 335, 206),
    ...COL_TRI(3, 205, 206),
    ...COL_TRI(0, 336, 3),
    ...COL_TRI(173, 139, 9),
    ...COL_TRI(173, 225, 224),
    ...COL_TRI(173, 224, 47),
    ...COL_TRI(173, 9, 225),
    ...COL_TRI(206, 173, 172),
    ...COL_TRI(5, 205, 3),
    ...COL_TRI(207, 208, 64),
    ...COL_TRI(208, 213, 337),
    ...COL_TRI(208, 209, 213),
    ...COL_TRI(209, 208, 332),
    ...COL_TRI(210, 332, 208),
    ...COL_TRI(61, 208, 62),
    ...COL_TRI(61, 124, 208),
    ...COL_TRI(63, 208, 207),
    ...COL_TRI(63, 62, 208),
    ...COL_TRI(64, 208, 337),
    ...COL_TRI(212, 211, 213),
    ...COL_TRI(207, 64, 111),
    ...COL_TRI(64, 65, 111),
    ...COL_TRI(64, 212, 65),
    ...COL_TRI(211, 64, 337),
    ...COL_TRI(212, 64, 211),
    ...COL_TRI(209, 212, 213),
    ...COL_TRI(213, 211, 337),
    ...COL_TRI(214, 232, 209),
    ...COL_TRI(212, 209, 232),
    ...COL_TRI(212, 232, 13),
    ...COL_TRI(210, 331, 332),
    ...COL_TRI(203, 332, 331),
    ...COL_TRI(65, 116, 236),
    ...COL_TRI(65, 236, 111),
    ...COL_TRI(65, 212, 116),
    ...COL_TRI(124, 61, 68),
    ...COL_TRI(68, 61, 59),
    ...COL_TRI(68, 59, 63),
    ...COL_TRI(68, 63, 142),
    ...COL_TRI(215, 16, 287),
    ...COL_TRI(215, 287, 341),
    ...COL_TRI(216, 197, 215),
    ...COL_TRI(215, 197, 17),
    ...COL_TRI(215, 229, 200),
    ...COL_TRI(215, 200, 216),
    ...COL_TRI(217, 10, 219),
    ...COL_TRI(200, 197, 216),
    ...COL_TRI(2, 229, 226),
    ...COL_TRI(2, 200, 229),
    ...COL_TRI(217, 12, 10),
    ...COL_TRI(218, 12, 217),
    ...COL_TRI(72, 217, 71),
    ...COL_TRI(219, 10, 9),
    ...COL_TRI(219, 71, 217),
    ...COL_TRI(219, 139, 71),
    ...COL_TRI(139, 219, 9),
    ...COL_TRI(218, 14, 12),
    ...COL_TRI(41, 220, 45),
    ...COL_TRI(220, 222, 45),
    ...COL_TRI(220, 41, 221),
    ...COL_TRI(116, 212, 218),
    ...COL_TRI(45, 222, 174),
    ...COL_TRI(222, 256, 223),
    ...COL_TRI(174, 222, 223),
    ...COL_TRI(172, 221, 41),
    ...COL_TRI(221, 172, 223),
    ...COL_TRI(172, 174, 223),
    ...COL_TRI(223, 256, 257),
    ...COL_TRI(221, 343, 220),
    ...COL_TRI(212, 13, 14),
    ...COL_TRI(218, 212, 14),
    ...COL_TRI(224, 225, 11),
    ...COL_TRI(224, 201, 334),
    ...COL_TRI(224, 11, 15),
    ...COL_TRI(224, 15, 338),
    ...COL_TRI(201, 224, 338),
    ...COL_TRI(225, 9, 11),
    ...COL_TRI(47, 334, 204),
    ...COL_TRI(201, 204, 334),
    ...COL_TRI(200, 1, 330),
    ...COL_TRI(72, 218, 217),
    ...COL_TRI(226, 346, 347),
    ...COL_TRI(226, 348, 346),
    ...COL_TRI(72, 116, 218),
    ...COL_TRI(3, 41, 1),
    ...COL_TRI(200, 2, 1),
    ...COL_TRI(227, 349, 290),
    ...COL_TRI(227, 229, 349),
    ...COL_TRI(16, 227, 342),
    ...COL_TRI(227, 290, 342),
    ...COL_TRI(227, 348, 229),
    ...COL_TRI(227, 230, 348),
    ...COL_TRI(228, 229, 341),
    ...COL_TRI(229, 228, 349),
    ...COL_TRI(27, 230, 227),
    ...COL_TRI(27, 227, 16),
    ...COL_TRI(27, 16, 28),
    ...COL_TRI(228, 290, 349),
    ...COL_TRI(230, 346, 348),
    ...COL_TRI(230, 285, 346),
    ...COL_TRI(226, 347, 350),
    ...COL_TRI(226, 350, 6),
    ...COL_TRI(4, 6, 350),
    ...COL_TRI(226, 0, 2),
    ...COL_TRI(231, 303, 0),
    ...COL_TRI(0, 303, 336),
    ...COL_TRI(15, 13, 232),
    ...COL_TRI(232, 201, 338),
    ...COL_TRI(232, 338, 15),
    ...COL_TRI(233, 232, 214),
    ...COL_TRI(234, 201, 232),
    ...COL_TRI(234, 232, 233),
    ...COL_TRI(109, 58, 72),
    ...COL_TRI(235, 339, 116),
    ...COL_TRI(58, 235, 116),
    ...COL_TRI(236, 116, 339),
    ...COL_TRI(58, 116, 72),
    ...COL_TRI(237, 109, 72),
    ...COL_TRI(119, 237, 353),
    ...COL_TRI(237, 310, 109),
    ...COL_TRI(237, 119, 310),
    ...COL_TRI(17, 197, 18),
    ...COL_TRI(238, 18, 197),
    ...COL_TRI(19, 18, 354),
    ...COL_TRI(7, 355, 138),
    ...COL_TRI(239, 355, 7),
    ...COL_TRI(203, 233, 214),
    ...COL_TRI(207, 111, 110),
    ...COL_TRI(207, 110, 240),
    ...COL_TRI(238, 356, 357),
    ...COL_TRI(238, 68, 356),
    ...COL_TRI(19, 354, 284),
    ...COL_TRI(4, 350, 239),
    ...COL_TRI(239, 7, 4),
    ...COL_TRI(7, 138, 8),
    ...COL_TRI(207, 240, 358),
    ...COL_TRI(240, 119, 358),
    ...COL_TRI(198, 331, 210),
    ...COL_TRI(210, 124, 238),
    ...COL_TRI(198, 238, 197),
    ...COL_TRI(210, 238, 198),
    ...COL_TRI(63, 207, 142),
    ...COL_TRI(241, 359, 242),
    ...COL_TRI(241, 242, 243),
    ...COL_TRI(242, 359, 360),
    ...COL_TRI(243, 242, 360),
    ...COL_TRI(244, 360, 359),
    ...COL_TRI(244, 359, 241),
    ...COL_TRI(243, 360, 244),
    ...COL_TRI(203, 245, 233),
    ...COL_TRI(203, 202, 234),
    ...COL_TRI(203, 234, 245),
    ...COL_TRI(202, 201, 234),
    ...COL_TRI(245, 234, 233),
    ...COL_TRI(240, 310, 119),
    ...COL_TRI(251, 254, 364),
    ...COL_TRI(246, 247, 142),
    ...COL_TRI(247, 356, 68),
    ...COL_TRI(247, 68, 142),
    ...COL_TRI(246, 142, 73),
    ...COL_TRI(248, 250, 361),
    ...COL_TRI(248, 361, 249),
    ...COL_TRI(248, 362, 250),
    ...COL_TRI(249, 361, 363),
    ...COL_TRI(250, 363, 361),
    ...COL_TRI(250, 362, 363),
    ...COL_TRI(251, 364, 252),
    ...COL_TRI(252, 253, 251),
    ...COL_TRI(254, 365, 366),
    ...COL_TRI(254, 366, 364),
    ...COL_TRI(253, 365, 254),
    ...COL_TRI(253, 254, 251),
    ...COL_TRI(252, 364, 366),
    ...COL_TRI(252, 366, 255),
    ...COL_TRI(252, 255, 253),
    ...COL_TRI(255, 366, 365),
    ...COL_TRI(255, 365, 253),
    ...COL_TRI(256, 345, 257),
    ...COL_TRI(257, 345, 367),
    ...COL_TRI(258, 367, 260),
    ...COL_TRI(259, 258, 260),
    ...COL_TRI(260, 367, 345),
    ...COL_TRI(266, 372, 267),
    ...COL_TRI(259, 368, 261),
    ...COL_TRI(261, 258, 259),
    ...COL_TRI(262, 369, 263),
    ...COL_TRI(263, 370, 262),
    ...COL_TRI(262, 370, 368),
    ...COL_TRI(261, 368, 370),
    ...COL_TRI(264, 371, 265),
    ...COL_TRI(265, 268, 264),
    ...COL_TRI(265, 371, 369),
    ...COL_TRI(263, 369, 371),
    ...COL_TRI(273, 269, 375),
    ...COL_TRI(267, 372, 373),
    ...COL_TRI(268, 266, 374),
    ...COL_TRI(264, 268, 374),
    ...COL_TRI(267, 374, 266),
    ...COL_TRI(269, 373, 270),
    ...COL_TRI(270, 375, 269),
    ...COL_TRI(270, 373, 372),
    ...COL_TRI(271, 276, 272),
    ...COL_TRI(272, 273, 271),
    ...COL_TRI(271, 273, 375),
    ...COL_TRI(274, 344, 275),
    ...COL_TRI(275, 344, 343),
    ...COL_TRI(275, 376, 274),
    ...COL_TRI(272, 276, 376),
    ...COL_TRI(276, 274, 376),
    ...COL_TRI(220, 343, 344),
    ...COL_TRI(277, 20, 377),
    ...COL_TRI(20, 278, 377),
    ...COL_TRI(20, 25, 278),
    ...COL_TRI(277, 29, 20),
    ...COL_TRI(278, 24, 279),
    ...COL_TRI(278, 25, 24),
    ...COL_TRI(279, 24, 23),
    ...COL_TRI(279, 23, 281),
    ...COL_TRI(280, 21, 282),
    ...COL_TRI(280, 22, 21),
    ...COL_TRI(281, 22, 280),
    ...COL_TRI(282, 356, 283),
    ...COL_TRI(283, 378, 282),
    ...COL_TRI(281, 23, 22),
    ...COL_TRI(286, 26, 29),
    ...COL_TRI(16, 30, 28),
    ...COL_TRI(284, 32, 19),
    ...COL_TRI(16, 32, 30),
    ...COL_TRI(16, 19, 32),
    ...COL_TRI(285, 26, 286),
    ...COL_TRI(285, 27, 26),
    ...COL_TRI(286, 29, 277),
    ...COL_TRI(287, 289, 341),
    ...COL_TRI(16, 288, 287),
    ...COL_TRI(288, 291, 287),
    ...COL_TRI(287, 291, 289),
    ...COL_TRI(289, 228, 341),
    ...COL_TRI(16, 342, 288),
    ...COL_TRI(290, 288, 342),
    ...COL_TRI(290, 291, 288),
    ...COL_TRI(228, 291, 290),
    ...COL_TRI(291, 228, 289),
    ...COL_TRI(292, 293, 294),
    ...COL_TRI(295, 384, 297),
    ...COL_TRI(292, 379, 293),
    ...COL_TRI(293, 380, 294),
    ...COL_TRI(294, 380, 381),
    ...COL_TRI(294, 381, 292),
    ...COL_TRI(292, 381, 382),
    ...COL_TRI(292, 382, 379),
    ...COL_TRI(293, 383, 380),
    ...COL_TRI(295, 297, 296),
    ...COL_TRI(296, 385, 295),
    ...COL_TRI(296, 386, 385),
    ...COL_TRI(297, 386, 296),
    ...COL_TRI(295, 385, 387),
    ...COL_TRI(295, 387, 384),
    ...COL_TRI(297, 388, 386),
    ...COL_TRI(298, 300, 389),
    ...COL_TRI(299, 300, 302),
    ...COL_TRI(300, 298, 306),
    ...COL_TRI(300, 299, 335),
    ...COL_TRI(301, 335, 299),
    ...COL_TRI(300, 335, 389),
    ...COL_TRI(302, 301, 299),
    ...COL_TRI(303, 351, 336),
    ...COL_TRI(303, 231, 351),
    ...COL_TRI(231, 352, 351),
    ...COL_TRI(304, 305, 231),
    ...COL_TRI(231, 305, 352),
    ...COL_TRI(226, 205, 308),
    ...COL_TRI(305, 391, 352),
    ...COL_TRI(305, 304, 391),
    ...COL_TRI(304, 392, 391),
    ...COL_TRI(306, 307, 304),
    ...COL_TRI(304, 307, 392),
    ...COL_TRI(307, 393, 392),
    ...COL_TRI(307, 306, 393),
    ...COL_TRI(306, 390, 393),
    ...COL_TRI(306, 298, 390),
    ...COL_TRI(298, 389, 390),
    ...COL_TRI(310, 311, 316),
    ...COL_TRI(205, 394, 308),
    ...COL_TRI(308, 394, 301),
    ...COL_TRI(302, 308, 301),
    ...COL_TRI(308, 302, 226),
    ...COL_TRI(240, 313, 309),
    ...COL_TRI(309, 313, 395),
    ...COL_TRI(310, 240, 309),
    ...COL_TRI(310, 309, 311),
    ...COL_TRI(311, 309, 395),
    ...COL_TRI(240, 312, 313),
    ...COL_TRI(312, 316, 313),
    ...COL_TRI(313, 396, 395),
    ...COL_TRI(110, 109, 398),
    ...COL_TRI(110, 398, 395),
    ...COL_TRI(314, 110, 395),
    ...COL_TRI(314, 395, 396),
    ...COL_TRI(311, 395, 398),
    ...COL_TRI(315, 396, 397),
    ...COL_TRI(315, 314, 396),
    ...COL_TRI(313, 397, 396),
    ...COL_TRI(109, 315, 397),
    ...COL_TRI(109, 397, 398),
    ...COL_TRI(311, 398, 397),
    ...COL_TRI(316, 311, 397),
    ...COL_TRI(313, 316, 397),
    ...COL_TRI(312, 317, 316),
    ...COL_TRI(317, 310, 316),
    ...COL_TRI(317, 315, 109),
    ...COL_TRI(317, 109, 310),
    ...COL_TRI(236, 340, 111),
    ...COL_TRI(240, 110, 314),
    ...COL_TRI(240, 314, 312),
    ...COL_TRI(236, 339, 235),
    ...COL_TRI(318, 73, 69),
    ...COL_TRI(236, 235, 340),
    ...COL_TRI(235, 58, 111),
    ...COL_TRI(235, 111, 340),
    ...COL_TRI(315, 317, 314),
    ...COL_TRI(317, 312, 314),
    ...COL_TRI(318, 246, 73),
    ...COL_TRI(67, 399, 318),
    ...COL_TRI(67, 318, 69),
    ...COL_TRI(119, 399, 67),
    ...COL_TRI(119, 353, 399),
    ...COL_TRI(67, 358, 119),
    ...COL_TRI(67, 69, 358),
    ...COL_TRI(319, 400, 401),
    ...COL_TRI(319, 401, 402),
    ...COL_TRI(160, 92, 117),
    ...COL_TRI(320, 403, 404),
    ...COL_TRI(320, 405, 403),
    ...COL_TRI(91, 159, 115),
    ...COL_TRI(159, 65, 115),
    ...COL_TRI(91, 115, 406),
    ...COL_TRI(92, 407, 117),
    ...COL_TRI(160, 117, 116),
    ...COL_TRI(33, 322, 34),
    ...COL_TRI(34, 322, 408),
    ...COL_TRI(34, 408, 35),
    ...COL_TRI(321, 409, 408),
    ...COL_TRI(321, 408, 322),
    ...COL_TRI(35, 408, 409),
    ...COL_TRI(35, 409, 36),
    ...COL_TRI(322, 410, 323),
    ...COL_TRI(321, 322, 323),
    ...COL_TRI(33, 410, 322),
    ...COL_TRI(36, 409, 321),
    ...COL_TRI(31, 410, 33),
    ...COL_TRI(31, 323, 410),
    ...COL_TRI(38, 323, 31),
    ...COL_TRI(38, 411, 323),
    ...COL_TRI(323, 411, 321),
    ...COL_TRI(37, 411, 38),
    ...COL_TRI(37, 321, 411),
    ...COL_TRI(36, 321, 37),
    ...COL_TRI_INIT(SURFACE_DEATH_PLANE, 2),
    ...COL_TRI(418, 419, 420),
    ...COL_TRI(420, 419, 421),
    ...COL_TRI_INIT(/*SURFACE_DEATH_PLANE*/ SURFACE_VERY_SLIPPERY, 14),
    ...COL_TRI(39, 171, 40),
    ...COL_TRI(39, 43, 171),
    ...COL_TRI(43, 42, 56),
    ...COL_TRI(43, 56, 171),
    ...COL_TRI(40, 171, 51),
    ...COL_TRI(171, 107, 51),
    ...COL_TRI(171, 56, 107),
    ...COL_TRI(40, 51, 44),
    ...COL_TRI(44, 53, 48),
    ...COL_TRI(44, 50, 53),
    ...COL_TRI(50, 52, 53),
    ...COL_TRI(50, 54, 52),
    ...COL_TRI(41, 45, 47),
    ...COL_TRI(172, 173, 174),
    ...COL_TRI_INIT(SURFACE_SLIPPERY, 43),
    ...COL_TRI(203, 214, 332),
    ...COL_TRI(1, 199, 333),
    ...COL_TRI(199, 1, 41),
    ...COL_TRI(199, 41, 47),
    ...COL_TRI(193, 1, 333),
    ...COL_TRI(355, 237, 72),
    ...COL_TRI(355, 139, 138),
    ...COL_TRI(355, 71, 139),
    ...COL_TRI(72, 71, 355),
    ...COL_TRI(332, 214, 209),
    ...COL_TRI(335, 173, 206),
    ...COL_TRI(335, 139, 173),
    ...COL_TRI(139, 335, 205),
    ...COL_TRI(138, 139, 8),
    ...COL_TRI(139, 205, 8),
    ...COL_TRI(92, 91, 406),
    ...COL_TRI(92, 406, 407),
    ...COL_TRI(412, 101, 413),
    ...COL_TRI(406, 115, 407),
    ...COL_TRI(115, 117, 407),
    ...COL_TRI(96, 412, 417),
    ...COL_TRI(412, 97, 100),
    ...COL_TRI(412, 100, 417),
    ...COL_TRI(96, 417, 93),
    ...COL_TRI(98, 97, 412),
    ...COL_TRI(98, 412, 413),
    ...COL_TRI(412, 96, 101),
    ...COL_TRI(102, 98, 413),
    ...COL_TRI(413, 103, 414),
    ...COL_TRI(102, 413, 414),
    ...COL_TRI(413, 101, 103),
    ...COL_TRI(102, 414, 415),
    ...COL_TRI(414, 105, 415),
    ...COL_TRI(414, 103, 105),
    ...COL_TRI(100, 416, 417),
    ...COL_TRI(104, 102, 415),
    ...COL_TRI(415, 105, 416),
    ...COL_TRI(106, 415, 416),
    ...COL_TRI(106, 104, 415),
    ...COL_TRI(105, 94, 416),
    ...COL_TRI(100, 106, 416),
    ...COL_TRI(416, 93, 417),
    ...COL_TRI(416, 94, 93),
    ...COL_TRI_INIT(SURFACE_NOT_SLIPPERY, 4),
    ...COL_TRI(187, 192, 188),
    ...COL_TRI(187, 190, 192),
    ...COL_TRI(207, 358, 142),
    ...COL_TRI(358, 73, 142),
    ...COL_TRI_INIT(SURFACE_WALL_MISC, 143),
    ...COL_TRI(50, 44, 51),
    ...COL_TRI(39, 40, 41),
    ...COL_TRI(39, 41, 1),
    ...COL_TRI(1, 42, 39),
    ...COL_TRI(42, 43, 39),
    ...COL_TRI(41, 40, 44),
    ...COL_TRI(41, 44, 45),
    ...COL_TRI(1, 46, 42),
    ...COL_TRI(47, 45, 44),
    ...COL_TRI(47, 44, 48),
    ...COL_TRI(48, 49, 47),
    ...COL_TRI(52, 108, 49),
    ...COL_TRI(48, 52, 49),
    ...COL_TRI(48, 53, 52),
    ...COL_TRI(54, 107, 55),
    ...COL_TRI(55, 107, 56),
    ...COL_TRI(55, 56, 57),
    ...COL_TRI(54, 55, 108),
    ...COL_TRI(54, 51, 107),
    ...COL_TRI(46, 56, 42),
    ...COL_TRI(46, 57, 56),
    ...COL_TRI(52, 54, 108),
    ...COL_TRI(54, 50, 51),
    ...COL_TRI(58, 109, 110),
    ...COL_TRI(58, 110, 111),
    ...COL_TRI(59, 60, 112),
    ...COL_TRI(60, 113, 114),
    ...COL_TRI(60, 114, 112),
    ...COL_TRI(61, 113, 60),
    ...COL_TRI(61, 60, 59),
    ...COL_TRI(62, 113, 61),
    ...COL_TRI(62, 114, 113),
    ...COL_TRI(63, 112, 114),
    ...COL_TRI(63, 114, 62),
    ...COL_TRI(59, 112, 63),
    ...COL_TRI(64, 65, 115),
    ...COL_TRI(65, 116, 117),
    ...COL_TRI(65, 117, 115),
    ...COL_TRI(69, 121, 125),
    ...COL_TRI(66, 117, 116),
    ...COL_TRI(67, 119, 120),
    ...COL_TRI(67, 120, 121),
    ...COL_TRI(68, 122, 123),
    ...COL_TRI(68, 123, 124),
    ...COL_TRI(69, 67, 121),
    ...COL_TRI(25, 128, 70),
    ...COL_TRI(69, 126, 73),
    ...COL_TRI(69, 125, 126),
    ...COL_TRI(64, 115, 118),
    ...COL_TRI(23, 127, 24),
    ...COL_TRI(24, 127, 128),
    ...COL_TRI(24, 128, 25),
    ...COL_TRI(22, 130, 23),
    ...COL_TRI(25, 70, 129),
    ...COL_TRI(23, 130, 127),
    ...COL_TRI(26, 132, 27),
    ...COL_TRI(26, 133, 132),
    ...COL_TRI(29, 133, 26),
    ...COL_TRI(29, 131, 133),
    ...COL_TRI(70, 131, 29),
    ...COL_TRI(70, 29, 129),
    ...COL_TRI(4, 138, 7),
    ...COL_TRI(22, 134, 130),
    ...COL_TRI(21, 134, 22),
    ...COL_TRI(21, 135, 134),
    ...COL_TRI(4, 6, 136),
    ...COL_TRI(4, 136, 137),
    ...COL_TRI(4, 137, 138),
    ...COL_TRI(71, 139, 140),
    ...COL_TRI(71, 140, 141),
    ...COL_TRI(72, 141, 66),
    ...COL_TRI(72, 71, 141),
    ...COL_TRI(66, 116, 72),
    ...COL_TRI(73, 74, 142),
    ...COL_TRI(74, 122, 68),
    ...COL_TRI(74, 68, 142),
    ...COL_TRI(80, 147, 148),
    ...COL_TRI(73, 126, 74),
    ...COL_TRI(75, 143, 144),
    ...COL_TRI(75, 144, 77),
    ...COL_TRI(76, 143, 75),
    ...COL_TRI(77, 144, 145),
    ...COL_TRI(77, 145, 78),
    ...COL_TRI(76, 146, 143),
    ...COL_TRI(78, 145, 146),
    ...COL_TRI(78, 146, 76),
    ...COL_TRI(79, 147, 80),
    ...COL_TRI(84, 151, 152),
    ...COL_TRI(81, 148, 150),
    ...COL_TRI(80, 148, 81),
    ...COL_TRI(81, 150, 82),
    ...COL_TRI(79, 149, 147),
    ...COL_TRI(82, 150, 149),
    ...COL_TRI(82, 149, 79),
    ...COL_TRI(83, 151, 84),
    ...COL_TRI(84, 152, 85),
    ...COL_TRI(89, 156, 157),
    ...COL_TRI(85, 152, 153),
    ...COL_TRI(85, 153, 86),
    ...COL_TRI(83, 154, 151),
    ...COL_TRI(86, 153, 154),
    ...COL_TRI(86, 154, 83),
    ...COL_TRI(87, 155, 156),
    ...COL_TRI(88, 155, 87),
    ...COL_TRI(87, 156, 89),
    ...COL_TRI(89, 157, 90),
    ...COL_TRI(88, 158, 155),
    ...COL_TRI(90, 157, 158),
    ...COL_TRI(90, 158, 88),
    ...COL_TRI(91, 92, 159),
    ...COL_TRI(92, 160, 159),
    ...COL_TRI(93, 161, 96),
    ...COL_TRI(94, 95, 93),
    ...COL_TRI(97, 167, 166),
    ...COL_TRI(95, 162, 161),
    ...COL_TRI(93, 95, 161),
    ...COL_TRI(96, 161, 162),
    ...COL_TRI(96, 162, 101),
    ...COL_TRI(95, 163, 164),
    ...COL_TRI(95, 164, 165),
    ...COL_TRI(95, 165, 162),
    ...COL_TRI(97, 166, 100),
    ...COL_TRI(101, 162, 165),
    ...COL_TRI(99, 166, 167),
    ...COL_TRI(99, 168, 166),
    ...COL_TRI(100, 166, 168),
    ...COL_TRI(100, 168, 106),
    ...COL_TRI(99, 167, 169),
    ...COL_TRI(101, 165, 103),
    ...COL_TRI(104, 99, 170),
    ...COL_TRI(98, 169, 167),
    ...COL_TRI(98, 167, 97),
    ...COL_TRI(102, 169, 98),
    ...COL_TRI(99, 169, 170),
    ...COL_TRI(103, 165, 164),
    ...COL_TRI(103, 164, 105),
    ...COL_TRI(104, 170, 102),
    ...COL_TRI(102, 170, 169),
    ...COL_TRI(106, 99, 104),
    ...COL_TRI(105, 164, 163),
    ...COL_TRI(105, 163, 94),
    ...COL_TRI(94, 163, 95),
    ...COL_TRI(106, 168, 99),
    ...COL_TRI_INIT(SURFACE_NOISE_DEFAULT, 25),
    ...COL_TRI(16, 17, 18),
    ...COL_TRI(16, 18, 19),
    ...COL_TRI(20, 21, 22),
    ...COL_TRI(20, 23, 24),
    ...COL_TRI(20, 22, 23),
    ...COL_TRI(20, 24, 25),
    ...COL_TRI(26, 27, 28),
    ...COL_TRI(26, 28, 29),
    ...COL_TRI(31, 37, 38),
    ...COL_TRI(28, 30, 29),
    ...COL_TRI(20, 29, 30),
    ...COL_TRI(20, 30, 32),
    ...COL_TRI(31, 33, 34),
    ...COL_TRI(31, 34, 35),
    ...COL_TRI(31, 36, 37),
    ...COL_TRI(7, 8, 5),
    ...COL_TRI(0, 1, 2),
    ...COL_TRI(0, 3, 1),
    ...COL_TRI(4, 5, 6),
    ...COL_TRI(4, 7, 5),
	//these would be bossfight camera, figure out why they break.
    ...COL_TRI(13, 15, 11),
    ...COL_TRI(9, 10, 11),
    ...COL_TRI(10, 12, 13),
    ...COL_TRI(11, 10, 13),
    ...COL_TRI(12, 14, 13),
    //...COL_TRI_INIT(SURFACE_BOSS_FIGHT_CAMERA, 5),
    ...COL_TRI_STOP(),
    ...COL_SPECIAL_INIT(5),
    //SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_null_start,   /*pos*/  2560,  256, 5120, /*yaw*/ 64), // unused, probably an early way to set intial position
    ...SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_level_geo_0E, /*pos*/  3584,  154, 4864, /*yaw*/ 0),
    ...SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_level_geo_0F, /*pos*/  4608,  256, 1792, /*yaw*/ 0),
    ...SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_level_geo_11, /*pos*/ -2499, 1792, -261, /*yaw*/ 0),
    ...SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_level_geo_12, /*pos*/ -2661,  384,  640, /*yaw*/ 0),
    ...SPECIAL_OBJECT(/*preset*/ special_bubble_tree,  /*pos*/  2560,  256, 4608),
    ...COL_WATER_BOX_INIT(1),
    ...COL_WATER_BOX(0, -1023, 1024, 3226, 4096, 973),
    ...COL_END(),
]