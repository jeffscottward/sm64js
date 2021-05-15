import * as Gbi from "../../../../../include/gbi"
import {
    snow_09003000,
    snow_09006000,
    snow_09002000} from "../../../../../textures/snow"

import {
    sl_seg7_texture_07000000,
    sl_seg7_texture_07002000} from "../../../texture.inc"
const sl_seg7_lights_07008DE8 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const sl_seg7_vertex_07008E00 = [
	{ pos: [ -403, 819, 1818 ], flag: 0, tc: [ -432, 444 ], color: [ 216, 76, 164, 255 ] },
	{ pos: [ -403, 1024, 1818 ], flag: 0, tc: [ -432, 308 ], color: [ 215, 16, 118, 255 ] },
	{ pos: [ -1801, 768, 952 ], flag: 0, tc: [ -1828, 478 ], color: [ 219, 107, 57, 255 ] },
	{ pos: [ 875, 1024, 1818 ], flag: 0, tc: [ 840, 308 ], color: [ 143, 24, 51, 255 ] },
	{ pos: [ 875, 1536, 1571 ], flag: 0, tc: [ 840, 0 ], color: [ 243, 29, 122, 255 ] },
	{ pos: [ 0, 2150, 1818 ], flag: 0, tc: [ 0, -440 ], color: [ 4, 2, 126, 255 ] },
	{ pos: [ -1033, 1823, 1428 ], flag: 0, tc: [ -1078, -222 ], color: [ 198, 8, 112, 255 ] },
	{ pos: [ 909, 2150, 1571 ], flag: 0, tc: [ 876, -440 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 1308, 1741, 1473 ], flag: 0, tc: [ 1274, -168 ], color: [ 238, 95, 81, 255 ] },
	{ pos: [ 1308, 2108, 1473 ], flag: 0, tc: [ 1274, -412 ], color: [ 101, 43, 62, 255 ] },
	{ pos: [ 909, 2816, 1571 ], flag: 0, tc: [ 876, -884 ], color: [ 188, 39, 99, 255 ] },
	{ pos: [ 909, 2150, 1571 ], flag: 0, tc: [ 1536, -440 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 909, 2816, 1571 ], flag: 0, tc: [ 1536, -884 ], color: [ 188, 39, 99, 255 ] },
	{ pos: [ 768, 2150, 1024 ], flag: 0, tc: [ 990, -440 ], color: [ 134, 0, 31, 255 ] },
	{ pos: [ 768, 2816, 1024 ], flag: 0, tc: [ 990, -884 ], color: [ 43, 112, 40, 255 ] },
	{ pos: [ 1308, 2108, 1473 ], flag: 0, tc: [ 1438, -412 ], color: [ 101, 43, 62, 255 ] },
]

const sl_seg7_vertex_07008F00 = [
	{ pos: [ 1308, 2108, 1473 ], flag: 0, tc: [ 1438, -412 ], color: [ 101, 43, 62, 255 ] },
	{ pos: [ 995, 2816, 683 ], flag: 0, tc: [ 650, -884 ], color: [ 115, 53, 1, 255 ] },
	{ pos: [ 768, 2816, 1024 ], flag: 0, tc: [ 990, -884 ], color: [ 43, 112, 40, 255 ] },
	{ pos: [ 995, 2108, 683 ], flag: 0, tc: [ 650, -412 ], color: [ 118, 0, 210, 255 ] },
]

const sl_seg7_vertex_07008F40 = [
	{ pos: [ 1308, 1741, 1473 ], flag: 0, tc: [ -226, 126 ], color: [ 238, 95, 81, 255 ] },
	{ pos: [ 1534, 1741, 1678 ], flag: 0, tc: [ 182, -326 ], color: [ 32, 121, 16, 255 ] },
	{ pos: [ 1919, 1903, 682 ], flag: 0, tc: [ -1804, -1094 ], color: [ 244, 125, 15, 255 ] },
	{ pos: [ -6143, 1024, 6144 ], flag: 0, tc: [ -12294, -11274 ], color: [ 21, 124, 10, 255 ] },
	{ pos: [ -5887, 1024, 5632 ], flag: 0, tc: [ -11272, -10764 ], color: [ 13, 126, 6, 255 ] },
	{ pos: [ -6143, 1382, 4096 ], flag: 0, tc: [ -8206, -11274 ], color: [ 122, 34, 5, 255 ] },
	{ pos: [ -4351, 1024, 6144 ], flag: 0, tc: [ -12294, -7698 ], color: [ 210, 118, 0, 255 ] },
	{ pos: [ -4351, 1024, 5632 ], flag: 0, tc: [ -11272, -7698 ], color: [ 212, 118, 0, 255 ] },
	{ pos: [ 875, 1536, 2626 ], flag: 0, tc: [ 2074, 990 ], color: [ 180, 61, 176, 255 ] },
	{ pos: [ 1418, 1741, 2366 ], flag: 0, tc: [ 1556, -96 ], color: [ 12, 126, 254, 255 ] },
	{ pos: [ 1182, 1536, 2288 ], flag: 0, tc: [ 1398, 376 ], color: [ 181, 97, 227, 255 ] },
	{ pos: [ 1182, 1536, 1673 ], flag: 0, tc: [ 172, 376 ], color: [ 180, 95, 33, 255 ] },
	{ pos: [ 875, 1536, 1571 ], flag: 0, tc: [ 0, 990 ], color: [ 243, 29, 122, 255 ] },
	{ pos: [ 2175, 1903, 852 ], flag: 0, tc: [ -1464, -1604 ], color: [ 246, 125, 16, 255 ] },
]

const sl_seg7_vertex_07009020 = [
	{ pos: [ -3756, 1024, 2637 ], flag: 0, tc: [ 8742, -2416 ], color: [ 83, 52, 79, 255 ] },
	{ pos: [ -3756, 819, 2842 ], flag: 0, tc: [ 9424, -1736 ], color: [ 20, 116, 45, 255 ] },
	{ pos: [ -3551, 819, 2330 ], flag: 0, tc: [ 7720, -1736 ], color: [ 51, 100, 57, 255 ] },
	{ pos: [ -3551, 819, 2330 ], flag: 0, tc: [ -11846, 8740 ], color: [ 51, 100, 57, 255 ] },
	{ pos: [ -2195, 817, 3060 ], flag: 0, tc: [ -7336, 11168 ], color: [ 228, 112, 206, 255 ] },
	{ pos: [ -511, 819, 2816 ], flag: 0, tc: [ -1734, 10356 ], color: [ 206, 72, 165, 255 ] },
	{ pos: [ -3756, 819, 2842 ], flag: 0, tc: [ -12528, 10444 ], color: [ 20, 116, 45, 255 ] },
	{ pos: [ -6143, 768, 4096 ], flag: 0, tc: [ -20470, 14614 ], color: [ 29, 123, 3, 255 ] },
	{ pos: [ -4186, 1024, 2629 ], flag: 0, tc: [ 8736, 14578 ], color: [ 198, 81, 77, 255 ] },
	{ pos: [ -4201, 819, 2833 ], flag: 0, tc: [ 9418, 14578 ], color: [ 205, 114, 18, 255 ] },
	{ pos: [ -3756, 819, 2842 ], flag: 0, tc: [ 9424, 13486 ], color: [ 20, 116, 45, 255 ] },
	{ pos: [ -3756, 1024, 2637 ], flag: 0, tc: [ 8742, 13486 ], color: [ 83, 52, 79, 255 ] },
	{ pos: [ -3551, 1024, 2330 ], flag: 0, tc: [ 7720, -2416 ], color: [ 39, 0, 120, 255 ] },
	{ pos: [ 1024, 1024, -3071 ], flag: 0, tc: [ 10188, -2416 ], color: [ 161, 79, 231, 255 ] },
	{ pos: [ 1536, 1536, -4095 ], flag: 0, tc: [ 13594, -4120 ], color: [ 180, 8, 155, 255 ] },
	{ pos: [ 1536, 1024, -4095 ], flag: 0, tc: [ 13594, -2416 ], color: [ 245, 73, 153, 255 ] },
]

const sl_seg7_vertex_07009120 = [
	{ pos: [ -1217, 1119, -3205 ], flag: 0, tc: [ 10632, -2734 ], color: [ 78, 99, 5, 255 ] },
	{ pos: [ -1137, 1536, -2814 ], flag: 0, tc: [ 9334, -4120 ], color: [ 117, 4, 207, 255 ] },
	{ pos: [ -511, 512, -2175 ], flag: 0, tc: [ 7208, -714 ], color: [ 69, 105, 245, 255 ] },
	{ pos: [ -1053, 1271, -2411 ], flag: 0, tc: [ 7992, -3240 ], color: [ 113, 200, 248, 255 ] },
	{ pos: [ -1015, 1536, -2225 ], flag: 0, tc: [ 7374, -4120 ], color: [ 125, 12, 11, 255 ] },
	{ pos: [ -808, 986, -1223 ], flag: 0, tc: [ 4040, -2292 ], color: [ 104, 71, 253, 255 ] },
	{ pos: [ -767, 973, -1023 ], flag: 0, tc: [ 3374, -2246 ], color: [ 43, 113, 221, 255 ] },
	{ pos: [ 512, 512, -2354 ], flag: 0, tc: [ 7804, -714 ], color: [ 219, 121, 3, 255 ] },
	{ pos: [ 1008, 1126, -2425 ], flag: 0, tc: [ 8038, -2758 ], color: [ 132, 236, 245, 255 ] },
	{ pos: [ 1024, 1024, -3071 ], flag: 0, tc: [ 10188, -2416 ], color: [ 161, 79, 231, 255 ] },
	{ pos: [ 1008, 1536, -2834 ], flag: 0, tc: [ 9400, -4120 ], color: [ 146, 228, 200, 255 ] },
	{ pos: [ 1536, 1536, -4095 ], flag: 0, tc: [ 13594, -4120 ], color: [ 180, 8, 155, 255 ] },
	{ pos: [ -1053, 1271, -2411 ], flag: 0, tc: [ 3476, 9012 ], color: [ 113, 200, 248, 255 ] },
	{ pos: [ -629, 1536, -2425 ], flag: 0, tc: [ 2064, 9058 ], color: [ 62, 158, 50, 255 ] },
	{ pos: [ -1015, 1536, -2225 ], flag: 0, tc: [ 3348, 8394 ], color: [ 125, 12, 11, 255 ] },
	{ pos: [ -629, 1536, -2630 ], flag: 0, tc: [ 2064, 9740 ], color: [ 49, 146, 218, 255 ] },
]

const sl_seg7_vertex_07009220 = [
	{ pos: [ -1053, 1271, -2411 ], flag: 0, tc: [ 3476, 9012 ], color: [ 113, 200, 248, 255 ] },
	{ pos: [ -1137, 1536, -2814 ], flag: 0, tc: [ 3752, 10354 ], color: [ 117, 4, 207, 255 ] },
	{ pos: [ -629, 1536, -2630 ], flag: 0, tc: [ 2064, 9740 ], color: [ 49, 146, 218, 255 ] },
	{ pos: [ 512, 512, -2354 ], flag: 0, tc: [ -1734, 8824 ], color: [ 219, 121, 3, 255 ] },
	{ pos: [ -511, 512, -2175 ], flag: 0, tc: [ 1672, 8228 ], color: [ 69, 105, 245, 255 ] },
	{ pos: [ 0, 973, -1279 ], flag: 0, tc: [ 0, 5246 ], color: [ 250, 116, 206, 255 ] },
	{ pos: [ 0, 1024, -3071 ], flag: 0, tc: [ 0, 11208 ], color: [ 17, 123, 24, 255 ] },
	{ pos: [ -1217, 1119, -3205 ], flag: 0, tc: [ 4020, 11652 ], color: [ 78, 99, 5, 255 ] },
	{ pos: [ -767, 973, -1023 ], flag: 0, tc: [ 2524, 4394 ], color: [ 43, 113, 221, 255 ] },
	{ pos: [ 768, 1024, -1023 ], flag: 0, tc: [ -2586, 4394 ], color: [ 142, 46, 226, 255 ] },
	{ pos: [ 768, 1024, -1023 ], flag: 0, tc: [ 3374, -2416 ], color: [ 142, 46, 226, 255 ] },
	{ pos: [ 1008, 1126, -2425 ], flag: 0, tc: [ 8038, -2758 ], color: [ 132, 236, 245, 255 ] },
	{ pos: [ 512, 512, -2354 ], flag: 0, tc: [ 7804, -714 ], color: [ 219, 121, 3, 255 ] },
	{ pos: [ 256, 256, -4607 ], flag: 0, tc: [ -882, 16318 ], color: [ 245, 126, 255, 255 ] },
	{ pos: [ 1024, 1024, -3071 ], flag: 0, tc: [ -3436, 11208 ], color: [ 161, 79, 231, 255 ] },
	{ pos: [ -1599, 1244, -5055 ], flag: 0, tc: [ 5290, 17808 ], color: [ 63, 107, 232, 255 ] },
]

const sl_seg7_vertex_07009320 = [
	{ pos: [ 768, 1024, -1023 ], flag: 0, tc: [ -3436, -2416 ], color: [ 142, 46, 226, 255 ] },
	{ pos: [ 768, 1331, -1023 ], flag: 0, tc: [ -3436, -3438 ], color: [ 130, 0, 255, 255 ] },
	{ pos: [ 771, 1331, -1252 ], flag: 0, tc: [ -4198, -3438 ], color: [ 133, 240, 233, 255 ] },
	{ pos: [ 1008, 1536, -2015 ], flag: 0, tc: [ -6738, -4120 ], color: [ 136, 218, 7, 255 ] },
	{ pos: [ 1008, 1126, -2425 ], flag: 0, tc: [ -8100, -2758 ], color: [ 132, 236, 245, 255 ] },
	{ pos: [ 4438, 1178, -3702 ], flag: 0, tc: [ -12348, -13774 ], color: [ 157, 29, 73, 255 ] },
	{ pos: [ 4211, 760, -2971 ], flag: 0, tc: [ -9918, -13018 ], color: [ 206, 107, 45, 255 ] },
	{ pos: [ 5191, 1024, -2866 ], flag: 0, tc: [ -9568, -16280 ], color: [ 182, 66, 78, 255 ] },
	{ pos: [ 3584, 1075, -4863 ], flag: 0, tc: [ -16212, -10934 ], color: [ 183, 97, 34, 255 ] },
	{ pos: [ 4608, 1434, -3532 ], flag: 0, tc: [ -11784, -14340 ], color: [ 203, 220, 109, 255 ] },
	{ pos: [ 4301, 1434, -3532 ], flag: 0, tc: [ -11784, -13318 ], color: [ 164, 180, 41, 255 ] },
	{ pos: [ 4403, 1434, -3737 ], flag: 0, tc: [ -12464, -13658 ], color: [ 131, 241, 11, 255 ] },
	{ pos: [ 4438, 1178, -3702 ], flag: 0, tc: [ -312, -2928 ], color: [ 157, 29, 73, 255 ] },
	{ pos: [ 5191, 1024, -2866 ], flag: 0, tc: [ 3424, -2416 ], color: [ 182, 66, 78, 255 ] },
	{ pos: [ 4608, 1434, -3532 ], flag: 0, tc: [ 482, -3780 ], color: [ 203, 220, 109, 255 ] },
]

const sl_seg7_vertex_07009410 = [
	{ pos: [ 3584, 1075, -4863 ], flag: 0, tc: [ -5102, -2586 ], color: [ 183, 97, 34, 255 ] },
	{ pos: [ 4438, 1178, -3702 ], flag: 0, tc: [ -312, -2928 ], color: [ 157, 29, 73, 255 ] },
	{ pos: [ 4403, 1434, -3737 ], flag: 0, tc: [ -474, -3780 ], color: [ 131, 241, 11, 255 ] },
	{ pos: [ 4220, 754, -1924 ], flag: 0, tc: [ -14070, 7392 ], color: [ 87, 86, 223, 255 ] },
	{ pos: [ 3328, 1536, -1791 ], flag: 0, tc: [ -11102, 6950 ], color: [ 75, 99, 234, 255 ] },
	{ pos: [ 6144, 1024, -1535 ], flag: 0, tc: [ -20470, 6098 ], color: [ 18, 41, 138, 255 ] },
	{ pos: [ 3246, 1306, -2897 ], flag: 0, tc: [ 9608, -3354 ], color: [ 83, 231, 164, 255 ] },
	{ pos: [ 3811, 1329, -2332 ], flag: 0, tc: [ 7730, -3430 ], color: [ 101, 70, 230, 255 ] },
	{ pos: [ 3913, 754, -2897 ], flag: 0, tc: [ 9608, -1518 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 4220, 754, -1924 ], flag: 0, tc: [ 6372, -1518 ], color: [ 87, 86, 223, 255 ] },
	{ pos: [ 4220, 754, -2333 ], flag: 0, tc: [ 7734, -1518 ], color: [ 101, 72, 230, 255 ] },
	{ pos: [ 3328, 1536, -1791 ], flag: 0, tc: [ 5930, -4120 ], color: [ 75, 99, 234, 255 ] },
	{ pos: [ 3551, 1651, -2881 ], flag: 0, tc: [ 9554, -4500 ], color: [ 113, 207, 30, 255 ] },
	{ pos: [ 1536, 1024, -4095 ], flag: 0, tc: [ -5140, -2416 ], color: [ 245, 73, 153, 255 ] },
	{ pos: [ 3246, 1306, -2897 ], flag: 0, tc: [ -10830, -3354 ], color: [ 83, 231, 164, 255 ] },
	{ pos: [ 3913, 754, -2897 ], flag: 0, tc: [ -13048, -1518 ], color: [ 73, 73, 183, 255 ] },
]

const sl_seg7_vertex_07009510 = [
	{ pos: [ 3014, 1616, -3129 ], flag: 0, tc: [ -10056, -4388 ], color: [ 24, 214, 139, 255 ] },
	{ pos: [ 3246, 1306, -2897 ], flag: 0, tc: [ -10830, -3354 ], color: [ 83, 231, 164, 255 ] },
	{ pos: [ 1536, 1024, -4095 ], flag: 0, tc: [ -5140, -2416 ], color: [ 245, 73, 153, 255 ] },
	{ pos: [ 1536, 1536, -4095 ], flag: 0, tc: [ -5140, -4120 ], color: [ 180, 8, 155, 255 ] },
	{ pos: [ 2816, 1024, -4351 ], flag: 0, tc: [ -8718, -4632 ], color: [ 251, 117, 209, 255 ] },
	{ pos: [ 3584, 1075, -4863 ], flag: 0, tc: [ -9740, -6164 ], color: [ 183, 97, 34, 255 ] },
	{ pos: [ 2816, 819, -4863 ], flag: 0, tc: [ -9740, -4630 ], color: [ 7, 126, 0, 255 ] },
	{ pos: [ 2373, 1024, -4607 ], flag: 0, tc: [ -9228, -3746 ], color: [ 40, 117, 233, 255 ] },
	{ pos: [ 2816, 1024, -5375 ], flag: 0, tc: [ -10762, -4630 ], color: [ 8, 126, 253, 255 ] },
	{ pos: [ 2373, 1024, -5119 ], flag: 0, tc: [ -10250, -3746 ], color: [ 24, 115, 46, 255 ] },
	{ pos: [ 1074, 1024, -5944 ], flag: 0, tc: [ -11898, -1154 ], color: [ 163, 58, 193, 255 ] },
	{ pos: [ 1115, 1229, -5778 ], flag: 0, tc: [ -11566, -1236 ], color: [ 13, 77, 157, 255 ] },
	{ pos: [ 1190, 1229, -5480 ], flag: 0, tc: [ -10972, -1384 ], color: [ 16, 96, 81, 255 ] },
	{ pos: [ 1248, 1024, -5249 ], flag: 0, tc: [ -10510, -1500 ], color: [ 189, 63, 86, 255 ] },
	{ pos: [ 693, 1331, -5673 ], flag: 0, tc: [ -11356, -394 ], color: [ 182, 197, 173, 255 ] },
]

const sl_seg7_vertex_07009600 = [
	{ pos: [ 256, 256, -4607 ], flag: 0, tc: [ -882, 16318 ], color: [ 245, 126, 255, 255 ] },
	{ pos: [ 1536, 1024, -4095 ], flag: 0, tc: [ -5140, 14614 ], color: [ 245, 73, 153, 255 ] },
	{ pos: [ 1248, 1024, -5249 ], flag: 0, tc: [ -4180, 18454 ], color: [ 189, 63, 86, 255 ] },
	{ pos: [ 1024, 1024, -3071 ], flag: 0, tc: [ -3436, 11208 ], color: [ 161, 79, 231, 255 ] },
	{ pos: [ 1074, 1024, -5944 ], flag: 0, tc: [ -3602, 20768 ], color: [ 163, 58, 193, 255 ] },
	{ pos: [ -1279, 1024, -5631 ], flag: 0, tc: [ 4226, 19724 ], color: [ 56, 113, 1, 255 ] },
	{ pos: [ -1599, 1244, -5055 ], flag: 0, tc: [ 5290, 17808 ], color: [ 63, 107, 232, 255 ] },
	{ pos: [ -1185, 1024, -6079 ], flag: 0, tc: [ 3912, 21216 ], color: [ 27, 118, 35, 255 ] },
	{ pos: [ 1024, 1024, -6143 ], flag: 0, tc: [ -3436, 21428 ], color: [ 221, 115, 39, 255 ] },
	{ pos: [ 3716, 1613, -3303 ], flag: 0, tc: [ -12392, 11980 ], color: [ 35, 232, 137, 255 ] },
	{ pos: [ 3746, 1511, -3273 ], flag: 0, tc: [ -12492, 11880 ], color: [ 58, 158, 202, 255 ] },
	{ pos: [ 3014, 1616, -3129 ], flag: 0, tc: [ -10056, 11402 ], color: [ 24, 214, 139, 255 ] },
	{ pos: [ 3246, 1306, -2897 ], flag: 0, tc: [ -10830, 10628 ], color: [ 83, 231, 164, 255 ] },
	{ pos: [ 3551, 1651, -2881 ], flag: 0, tc: [ -11844, 10574 ], color: [ 113, 207, 30, 255 ] },
	{ pos: [ 3818, 1613, -3201 ], flag: 0, tc: [ -12732, 11640 ], color: [ 108, 193, 238, 255 ] },
]

const sl_seg7_vertex_070096F0 = [
	{ pos: [ 1248, 1024, -5249 ], flag: 0, tc: [ -4180, 18454 ], color: [ 189, 63, 86, 255 ] },
	{ pos: [ 768, 1331, -5375 ], flag: 0, tc: [ -2586, 18874 ], color: [ 255, 225, 123, 255 ] },
	{ pos: [ 743, 1229, -5474 ], flag: 0, tc: [ -2502, 19204 ], color: [ 201, 146, 28, 255 ] },
	{ pos: [ 3551, 1651, -2881 ], flag: 0, tc: [ -5782, -6098 ], color: [ 113, 207, 30, 255 ] },
	{ pos: [ 3246, 1306, -2897 ], flag: 0, tc: [ -5814, -5490 ], color: [ 83, 231, 164, 255 ] },
	{ pos: [ 3746, 1511, -3273 ], flag: 0, tc: [ -6566, -6486 ], color: [ 58, 158, 202, 255 ] },
	{ pos: [ 3811, 1329, -2332 ], flag: 0, tc: [ -4688, -6616 ], color: [ 101, 70, 230, 255 ] },
	{ pos: [ 3818, 1613, -3201 ], flag: 0, tc: [ 10620, -4376 ], color: [ 108, 193, 238, 255 ] },
	{ pos: [ 3746, 1511, -3273 ], flag: 0, tc: [ 10860, -4036 ], color: [ 58, 158, 202, 255 ] },
	{ pos: [ 3716, 1613, -3303 ], flag: 0, tc: [ 10960, -4376 ], color: [ 35, 232, 137, 255 ] },
	{ pos: [ 1074, 1024, -5944 ], flag: 0, tc: [ -3602, 20768 ], color: [ 163, 58, 193, 255 ] },
	{ pos: [ 693, 1331, -5673 ], flag: 0, tc: [ -2338, 19864 ], color: [ 182, 197, 173, 255 ] },
	{ pos: [ 1190, 1229, -5480 ], flag: 0, tc: [ -3988, 19224 ], color: [ 16, 96, 81, 255 ] },
	{ pos: [ 371, 1331, -5276 ], flag: 0, tc: [ -1264, 18542 ], color: [ 238, 134, 27, 255 ] },
]

const sl_seg7_vertex_070097D0 = [
	{ pos: [ -3432, 768, 552 ], flag: 0, tc: [ 11390, -848 ], color: [ 43, 118, 7, 255 ] },
	{ pos: [ -1648, 768, 748 ], flag: 0, tc: [ 5452, -1496 ], color: [ 255, 126, 13, 255 ] },
	{ pos: [ -2303, 1024, -511 ], flag: 0, tc: [ 7634, 2692 ], color: [ 20, 115, 49, 255 ] },
	{ pos: [ -1801, 768, 952 ], flag: 0, tc: [ 5964, -2178 ], color: [ 219, 107, 57, 255 ] },
	{ pos: [ -3439, 819, 1818 ], flag: 0, tc: [ 11412, -5058 ], color: [ 51, 101, 201, 255 ] },
	{ pos: [ -4035, 768, 445 ], flag: 0, tc: [ 13060, -514 ], color: [ 227, 121, 235, 255 ] },
	{ pos: [ -3537, 1024, 255 ], flag: 0, tc: [ 11738, 142 ], color: [ 248, 110, 61, 255 ] },
	{ pos: [ -403, 819, 1818 ], flag: 0, tc: [ 1310, -5058 ], color: [ 216, 76, 164, 255 ] },
	{ pos: [ -403, 819, 1818 ], flag: 0, tc: [ 1310, -1736 ], color: [ 216, 76, 164, 255 ] },
	{ pos: [ -3439, 819, 1818 ], flag: 0, tc: [ 11412, -1736 ], color: [ 51, 101, 201, 255 ] },
	{ pos: [ -3439, 1024, 1818 ], flag: 0, tc: [ 11412, -2416 ], color: [ 76, 31, 160, 255 ] },
	{ pos: [ -403, 1024, 1818 ], flag: 0, tc: [ 1310, -2416 ], color: [ 215, 16, 118, 255 ] },
	{ pos: [ -3439, 1024, 1818 ], flag: 0, tc: [ -6078, -2416 ], color: [ 76, 31, 160, 255 ] },
	{ pos: [ -3439, 819, 1818 ], flag: 0, tc: [ -6078, -1736 ], color: [ 51, 101, 201, 255 ] },
	{ pos: [ -3432, 768, 552 ], flag: 0, tc: [ -1868, -1566 ], color: [ 43, 118, 7, 255 ] },
	{ pos: [ -3668, 1024, 633 ], flag: 0, tc: [ -2136, -2416 ], color: [ 47, 74, 166, 255 ] },
]

const sl_seg7_vertex_070098D0 = [
	{ pos: [ -3668, 1024, 633 ], flag: 0, tc: [ -12238, 3094 ], color: [ 47, 74, 166, 255 ] },
	{ pos: [ -4035, 768, 445 ], flag: 0, tc: [ -13456, 2468 ], color: [ 227, 121, 235, 255 ] },
	{ pos: [ -4044, 1024, 572 ], flag: 0, tc: [ -13486, 2890 ], color: [ 148, 26, 196, 255 ] },
	{ pos: [ -3432, 768, 552 ], flag: 0, tc: [ -11452, 2826 ], color: [ 43, 118, 7, 255 ] },
	{ pos: [ -3537, 1024, 255 ], flag: 0, tc: [ 11738, 142 ], color: [ 248, 110, 61, 255 ] },
	{ pos: [ -3432, 768, 552 ], flag: 0, tc: [ 11390, -848 ], color: [ 43, 118, 7, 255 ] },
	{ pos: [ -2303, 1024, -511 ], flag: 0, tc: [ 7634, 2692 ], color: [ 20, 115, 49, 255 ] },
	{ pos: [ -3537, 1024, 255 ], flag: 0, tc: [ -11800, 1836 ], color: [ 248, 110, 61, 255 ] },
	{ pos: [ -3781, 1024, -511 ], flag: 0, tc: [ -12612, -714 ], color: [ 230, 121, 25, 255 ] },
	{ pos: [ -6143, 1028, -460 ], flag: 0, tc: [ -20470, -544 ], color: [ 81, 90, 35, 255 ] },
	{ pos: [ -6143, 1028, -460 ], flag: 0, tc: [ -20470, -542 ], color: [ 81, 90, 35, 255 ] },
	{ pos: [ -4201, 819, 2833 ], flag: 0, tc: [ -14008, 10412 ], color: [ 205, 114, 18, 255 ] },
	{ pos: [ -4044, 1024, 572 ], flag: 0, tc: [ 1894, -2416 ], color: [ 148, 26, 196, 255 ] },
	{ pos: [ -4201, 819, 2833 ], flag: 0, tc: [ 9418, -1736 ], color: [ 205, 114, 18, 255 ] },
	{ pos: [ -4186, 1024, 2629 ], flag: 0, tc: [ 8736, -2416 ], color: [ 198, 81, 77, 255 ] },
	{ pos: [ -4035, 768, 445 ], flag: 0, tc: [ 1472, -1566 ], color: [ 227, 121, 235, 255 ] },
]

const sl_seg7_vertex_070099D0 = [
	{ pos: [ -4201, 819, 2833 ], flag: 0, tc: [ -14008, 10412 ], color: [ 205, 114, 18, 255 ] },
	{ pos: [ -6143, 1028, -460 ], flag: 0, tc: [ -20470, -544 ], color: [ 81, 90, 35, 255 ] },
	{ pos: [ -6143, 768, 1024 ], flag: 0, tc: [ -20470, 4394 ], color: [ 85, 93, 8, 255 ] },
	{ pos: [ -6143, 768, 4096 ], flag: 0, tc: [ -20470, 14614 ], color: [ 29, 123, 3, 255 ] },
	{ pos: [ -3756, 819, 2842 ], flag: 0, tc: [ -12528, 10444 ], color: [ 20, 116, 45, 255 ] },
	{ pos: [ -3634, 768, 4096 ], flag: 0, tc: [ -12124, 14614 ], color: [ 203, 91, 187, 255 ] },
	{ pos: [ -2195, 817, 3060 ], flag: 0, tc: [ -7336, 11168 ], color: [ 228, 112, 206, 255 ] },
	{ pos: [ -3551, 819, 2330 ], flag: 0, tc: [ -11846, 8740 ], color: [ 51, 100, 57, 255 ] },
	{ pos: [ -511, 819, 2816 ], flag: 0, tc: [ -1734, 10356 ], color: [ 206, 72, 165, 255 ] },
	{ pos: [ 90, 819, 2330 ], flag: 0, tc: [ 268, 8740 ], color: [ 210, 74, 91, 255 ] },
	{ pos: [ -3551, 1024, 2330 ], flag: 0, tc: [ 11784, -2416 ], color: [ 39, 0, 120, 255 ] },
	{ pos: [ -3551, 819, 2330 ], flag: 0, tc: [ 11784, -1736 ], color: [ 51, 100, 57, 255 ] },
	{ pos: [ 90, 819, 2330 ], flag: 0, tc: [ -330, -1736 ], color: [ 210, 74, 91, 255 ] },
	{ pos: [ 90, 1024, 2330 ], flag: 0, tc: [ -330, -2416 ], color: [ 191, 54, 162, 255 ] },
]

const sl_seg7_vertex_07009AB0 = [
	{ pos: [ -6143, 1382, 4096 ], flag: 0, tc: [ -13656, 1500 ], color: [ 122, 34, 5, 255 ] },
	{ pos: [ -6143, 768, 4096 ], flag: 0, tc: [ -13656, 3542 ], color: [ 29, 123, 3, 255 ] },
	{ pos: [ -6143, 768, 1024 ], flag: 0, tc: [ -3436, 3542 ], color: [ 85, 93, 8, 255 ] },
	{ pos: [ -6143, 1028, -460 ], flag: 0, tc: [ 1500, 2678 ], color: [ 81, 90, 35, 255 ] },
	{ pos: [ -6143, 1946, -460 ], flag: 0, tc: [ 1500, -372 ], color: [ 116, 0, 51, 255 ] },
	{ pos: [ -5247, 2048, -1279 ], flag: 0, tc: [ 4226, -714 ], color: [ 85, 0, 93, 255 ] },
	{ pos: [ 1008, 1126, -2425 ], flag: 0, tc: [ -3384, 9058 ], color: [ 132, 236, 245, 255 ] },
	{ pos: [ 394, 1536, -2630 ], flag: 0, tc: [ -1340, 9740 ], color: [ 202, 152, 209, 255 ] },
	{ pos: [ 1008, 1536, -2834 ], flag: 0, tc: [ -3384, 10420 ], color: [ 146, 228, 200, 255 ] },
	{ pos: [ 394, 1536, -2425 ], flag: 0, tc: [ -1340, 9058 ], color: [ 190, 157, 43, 255 ] },
	{ pos: [ 1008, 1536, -2015 ], flag: 0, tc: [ -3384, 7696 ], color: [ 136, 218, 7, 255 ] },
]

const sl_seg7_vertex_07009B60 = [
	{ pos: [ 875, 1536, 2626 ], flag: 0, tc: [ 1580, 0 ], color: [ 180, 61, 176, 255 ] },
	{ pos: [ 875, 1536, 1571 ], flag: 0, tc: [ -524, 0 ], color: [ 243, 29, 122, 255 ] },
	{ pos: [ 875, 1024, 1818 ], flag: 0, tc: [ 0, 990 ], color: [ 143, 24, 51, 255 ] },
	{ pos: [ 875, 1024, 2330 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 44, 179, 255 ] },
]

const sl_seg7_vertex_07009BA0 = [
	{ pos: [ -3634, 768, 4096 ], flag: 0, tc: [ 1782, 606 ], color: [ 203, 91, 187, 255 ] },
	{ pos: [ -3634, 1382, 4096 ], flag: 0, tc: [ 1782, 300 ], color: [ 7, 97, 175, 255 ] },
	{ pos: [ -2195, 817, 3060 ], flag: 0, tc: [ 1064, 582 ], color: [ 228, 112, 206, 255 ] },
	{ pos: [ 875, 1536, 2626 ], flag: 0, tc: [ -872, 2298 ], color: [ 180, 61, 176, 255 ] },
	{ pos: [ -511, 1311, 2816 ], flag: 0, tc: [ -1564, 2394 ], color: [ 216, 54, 149, 255 ] },
	{ pos: [ -1479, 2214, 3942 ], flag: 0, tc: [ -2046, 2956 ], color: [ 195, 93, 197, 255 ] },
	{ pos: [ 90, 1024, 2330 ], flag: 0, tc: [ -1262, 2150 ], color: [ 191, 54, 162, 255 ] },
	{ pos: [ 875, 1024, 2330 ], flag: 0, tc: [ -872, 2150 ], color: [ 167, 44, 179, 255 ] },
	{ pos: [ 1418, 1741, 2366 ], flag: 0, tc: [ -600, 2168 ], color: [ 12, 126, 254, 255 ] },
	{ pos: [ -2195, 817, 3060 ], flag: 0, tc: [ -2404, 2516 ], color: [ 228, 112, 206, 255 ] },
	{ pos: [ -511, 819, 2816 ], flag: 0, tc: [ 224, 582 ], color: [ 206, 72, 165, 255 ] },
	{ pos: [ -511, 1311, 2816 ], flag: 0, tc: [ 224, 336 ], color: [ 216, 54, 149, 255 ] },
	{ pos: [ 90, 1024, 2330 ], flag: 0, tc: [ -74, 478 ], color: [ 191, 54, 162, 255 ] },
	{ pos: [ 90, 819, 2330 ], flag: 0, tc: [ -74, 582 ], color: [ 210, 74, 91, 255 ] },
	{ pos: [ -2366, 1021, 4425 ], flag: 0, tc: [ -2488, 3196 ], color: [ 232, 122, 235, 255 ] },
	{ pos: [ -3634, 1382, 4096 ], flag: 0, tc: [ -3122, 3032 ], color: [ 7, 97, 175, 255 ] },
]

const sl_seg7_vertex_07009CA0 = [
	{ pos: [ 1418, 1741, 2366 ], flag: 0, tc: [ -600, 2168 ], color: [ 12, 126, 254, 255 ] },
	{ pos: [ -1479, 2214, 3942 ], flag: 0, tc: [ -2046, 2956 ], color: [ 195, 93, 197, 255 ] },
	{ pos: [ -1277, 1741, 7168 ], flag: 0, tc: [ -1946, 4566 ], color: [ 15, 125, 15, 255 ] },
	{ pos: [ -2366, 1021, 4425 ], flag: 0, tc: [ -2488, 3196 ], color: [ 232, 122, 235, 255 ] },
	{ pos: [ -3327, 2099, 7168 ], flag: 0, tc: [ -2968, 4566 ], color: [ 252, 124, 232, 255 ] },
	{ pos: [ -3611, 2099, 4329 ], flag: 0, tc: [ -3110, 3148 ], color: [ 167, 72, 204, 255 ] },
	{ pos: [ -3941, 1382, 4710 ], flag: 0, tc: [ -3274, 3338 ], color: [ 151, 69, 244, 255 ] },
	{ pos: [ -4351, 1024, 6144 ], flag: 0, tc: [ -3480, 4054 ], color: [ 210, 118, 0, 255 ] },
	{ pos: [ -3634, 1382, 4096 ], flag: 0, tc: [ -1154, 2624 ], color: [ 7, 97, 175, 255 ] },
	{ pos: [ -3327, 2099, 7168 ], flag: 0, tc: [ -786, 3850 ], color: [ 252, 124, 232, 255 ] },
	{ pos: [ -2366, 1021, 4425 ], flag: 0, tc: [ -622, 2754 ], color: [ 232, 122, 235, 255 ] },
	{ pos: [ -511, 1024, 6656 ], flag: 0, tc: [ -3276, -332 ], color: [ 103, 52, 51, 255 ] },
	{ pos: [ 1418, 1741, 2366 ], flag: 0, tc: [ -1178, -166 ], color: [ 12, 126, 254, 255 ] },
	{ pos: [ -1277, 1741, 7168 ], flag: 0, tc: [ -3432, -730 ], color: [ 15, 125, 15, 255 ] },
	{ pos: [ 1536, 1024, 2560 ], flag: 0, tc: [ -1352, 148 ], color: [ 82, 86, 41, 255 ] },
	{ pos: [ 1418, 1229, 2366 ], flag: 0, tc: [ -1238, 74 ], color: [ 116, 31, 41, 255 ] },
]

const sl_seg7_vertex_07009DA0 = [
	{ pos: [ 1534, 1741, 1678 ], flag: 0, tc: [ -854, -84 ], color: [ 32, 121, 16, 255 ] },
	{ pos: [ 1418, 1741, 2366 ], flag: 0, tc: [ -1178, -166 ], color: [ 12, 126, 254, 255 ] },
	{ pos: [ 1418, 1229, 2366 ], flag: 0, tc: [ -1238, 74 ], color: [ 116, 31, 41, 255 ] },
	{ pos: [ -3634, 1382, 4096 ], flag: 0, tc: [ -2032, -200 ], color: [ 7, 97, 175, 255 ] },
	{ pos: [ -3611, 2099, 4329 ], flag: 0, tc: [ -2058, -564 ], color: [ 167, 72, 204, 255 ] },
	{ pos: [ -3327, 2099, 7168 ], flag: 0, tc: [ -3390, -898 ], color: [ 252, 124, 232, 255 ] },
	{ pos: [ -3611, 2099, 4329 ], flag: 0, tc: [ -3110, 3148 ], color: [ 167, 72, 204, 255 ] },
	{ pos: [ -3634, 1382, 4096 ], flag: 0, tc: [ -3122, 3032 ], color: [ 7, 97, 175, 255 ] },
	{ pos: [ -3941, 1382, 4710 ], flag: 0, tc: [ -3274, 3338 ], color: [ 151, 69, 244, 255 ] },
	{ pos: [ -767, 4352, 768 ], flag: 0, tc: [ 1502, -7698 ], color: [ 38, 120, 12, 255 ] },
	{ pos: [ -670, 4352, 477 ], flag: 0, tc: [ 920, -7698 ], color: [ 5, 95, 83, 255 ] },
	{ pos: [ -511, 4864, 0 ], flag: 0, tc: [ 0, -8720 ], color: [ 45, 72, 93, 255 ] },
	{ pos: [ -4351, 1024, 5632 ], flag: 0, tc: [ -3480, 3798 ], color: [ 212, 118, 0, 255 ] },
	{ pos: [ -4351, 1024, 6144 ], flag: 0, tc: [ -3480, 4054 ], color: [ 210, 118, 0, 255 ] },
]

const sl_seg7_vertex_07009E80 = [
	{ pos: [ 0, 4864, 512 ], flag: 0, tc: [ 0, 2010 ], color: [ 174, 57, 77, 255 ] },
	{ pos: [ -511, 4864, 0 ], flag: 0, tc: [ -1052, 990 ], color: [ 45, 72, 93, 255 ] },
	{ pos: [ -670, 4352, 477 ], flag: 0, tc: [ -1370, 1940 ], color: [ 5, 95, 83, 255 ] },
	{ pos: [ -87, 4352, 671 ], flag: 0, tc: [ -206, 2328 ], color: [ 205, 106, 46, 255 ] },
	{ pos: [ -24, 4352, 925 ], flag: 0, tc: [ -80, 2834 ], color: [ 229, 123, 6, 255 ] },
	{ pos: [ 0, 4352, 1024 ], flag: 0, tc: [ 0, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 768, 4352, 768 ], flag: 0, tc: [ 1502, 2522 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ 623, 4352, 623 ], flag: 0, tc: [ 1212, 2232 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ 1024, 4351, 0 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ -767, 4352, 768 ], flag: 0, tc: [ -1564, 2522 ], color: [ 38, 120, 12, 255 ] },
	{ pos: [ -24, 4352, 925 ], flag: 0, tc: [ -118, 2680 ], color: [ 229, 123, 6, 255 ] },
]

export const sl_seg7_dl_07009F30 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(sl_seg7_lights_07008DE8.l[0], 1),
	Gbi.gsSPLight(sl_seg7_lights_07008DE8.a, 2),
	Gbi.gsSPVertex(sl_seg7_vertex_07008E00, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  1, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  5, 0x0,  6,  1,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  2,  1, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  7, 0x0,  8,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  7, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 12, 15, 0x0, 12, 14, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008F00, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_07009FE0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09006000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(sl_seg7_vertex_07008F40, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  4,  3, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles( 9,  0, 11, 0x0,  9,  1,  0, 0x0),
	...Gbi.gsSP2Triangles(11,  0, 12, 0x0,  1, 13,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_0700A058 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(sl_seg7_vertex_07009020, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  4,  3,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009120, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  3,  4, 0x0,  2,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 2,  4,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  9,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009220, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  5, 0x0,  3,  5,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13,  6, 14, 0x0),
	...Gbi.gsSP2Triangles(15,  6, 13, 0x0,  6,  3, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009320, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  6,  5, 0x0,  5,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 5, 10, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009410, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10,  7, 0x0),
	...Gbi.gsSP2Triangles(10,  8,  7, 0x0,  9,  7, 11, 0x0),
	...Gbi.gsSP2Triangles(11,  7, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009510, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  6, 0x0,  9,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9,  6, 0x0, 10, 11,  8, 0x0),
	...Gbi.gsSP2Triangles(12, 13,  9, 0x0, 11, 10, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009600, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  0,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  5,  6,  0, 0x0),
	...Gbi.gsSP2Triangles( 7,  5,  0, 0x0,  7,  0,  8, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 11, 10, 0x0, 13, 10, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_070096F0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  4,  3, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  2, 11, 0x0, 10,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0,  2,  1, 13, 0x0),
	Gbi.gsSP1Triangle(11,  2, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_070097D0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  3, 0x0,  5,  0,  6, 0x0),
	...Gbi.gsSP2Triangles( 4,  7,  3, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 8, 10, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSP1Triangle(12, 14, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_070098D0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  1, 0x0),
	...Gbi.gsSP2Triangles( 9,  1,  8, 0x0, 10, 11,  1, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_070099D0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  3,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  9, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle(10, 12, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009AB0, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  0, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  4,  3,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9,  6, 10, 0x0),
	Gbi.gsSP1Triangle( 6,  9,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_0700A418 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sl_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(sl_seg7_vertex_07009B60, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_0700A450 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, sl_seg7_texture_07002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(sl_seg7_vertex_07009BA0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  6,  3, 0x0),
	...Gbi.gsSP2Triangles( 8,  3,  5, 0x0,  9,  5,  4, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 13, 10, 0x0),
	...Gbi.gsSP2Triangles( 2, 11, 10, 0x0,  9, 14,  5, 0x0),
	Gbi.gsSP1Triangle( 9, 15, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009CA0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  2,  3, 0x0,  5,  6,  4, 0x0),
	...Gbi.gsSP2Triangles( 7,  4,  6, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 11, 14, 15, 0x0),
	Gbi.gsSP1Triangle(15, 12, 11, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009DA0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13,  8, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07009E80, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  4,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  7,  6,  8, 0x0),
	...Gbi.gsSP2Triangles( 9,  3,  2, 0x0,  9, 10,  3, 0x0),
	Gbi.gsSP1Triangle( 9,  5, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_0700A5A0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_07009F30),
	Gbi.gsSPDisplayList(sl_seg7_dl_07009FE0),
	Gbi.gsSPDisplayList(sl_seg7_dl_0700A058),
	Gbi.gsSPDisplayList(sl_seg7_dl_0700A418),
	Gbi.gsSPDisplayList(sl_seg7_dl_0700A450),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

