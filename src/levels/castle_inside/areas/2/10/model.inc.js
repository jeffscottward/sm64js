import * as Gbi from "../../../../../include/gbi"
import {
	texture_castle_light,
	inside_castle_seg7_texture_07000800,
	inside_castle_seg7_texture_07001000,
	inside_castle_seg7_texture_07002000,
	inside_castle_seg7_texture_07003000,
	inside_castle_seg7_texture_07003800,
	inside_castle_seg7_texture_07004800,
	inside_castle_seg7_texture_07005800,
	inside_castle_seg7_texture_07006000,
	inside_castle_seg7_texture_07006800,
	inside_castle_seg7_texture_07007000,
	inside_castle_seg7_texture_07007800,
	inside_castle_seg7_texture_07008000,
	inside_castle_seg7_texture_07008800,
	inside_castle_seg7_texture_07009000,
	inside_castle_seg7_texture_07009800,
	inside_castle_seg7_texture_0700A000,
	inside_castle_seg7_texture_0700A800,
	inside_castle_seg7_texture_0700B800,
	inside_castle_seg7_texture_0700C800,
	inside_castle_seg7_texture_0700D800,
	inside_castle_seg7_texture_0700E800,
	inside_castle_seg7_texture_0700F800,
} from "../../../texture.inc"
import {
	inside_09000000,
	inside_09001000,
	inside_09002000,
	inside_09003000,
	inside_09003800,
	inside_09004000,
	inside_09004800,
	inside_09005000,
	inside_09005800,
	inside_09006000,
	inside_09007000,
	inside_09008000,
	inside_09008800,
	inside_09009000,
	inside_0900A000,
	inside_0900B000,
	inside_0900B800,
} from "../../../../../textures/inside"
const inside_castle_seg7_vertex_07051370 = [
	{ pos: [ 1384, 2765, 7197 ], flag: 0, tc: [ 2012, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2867, 6992 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2765, 6992 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -760, 3174, 4792 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 352, 3277, 4792 ], flag: 0, tc: [ 11210, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -760, 3277, 4792 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 352, 3174, 4792 ], flag: 0, tc: [ 11210, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -809, 3174, 4610 ], flag: 0, tc: [ -896, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -760, 3277, 4792 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -809, 3277, 4610 ], flag: 0, tc: [ -896, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -760, 3174, 4792 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 352, 3174, 4792 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 401, 3174, 4610 ], flag: 0, tc: [ 1856, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 401, 3277, 4610 ], flag: 0, tc: [ 1856, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 352, 3277, 4792 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const inside_castle_seg7_vertex_07051460 = [
	{ pos: [ -1992, 2867, 6310 ], flag: 0, tc: [ -2074, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2867, 6509 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2765, 6509 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2765, 7197 ], flag: 0, tc: [ 2012, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2867, 7197 ], flag: 0, tc: [ 2012, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2867, 6992 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2765, 6992 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2867, 7197 ], flag: 0, tc: [ -1052, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2765, 7197 ], flag: 0, tc: [ -1052, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2867, 6992 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2867, 6603 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1793, 2765, 6603 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -1992, 2765, 6310 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2765, 6603 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2867, 6603 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2867, 6509 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

const inside_castle_seg7_vertex_07051560 = [
	{ pos: [ 1384, 2765, 6603 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2867, 6509 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1384, 2765, 6509 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1583, 2765, 6310 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1583, 2867, 6310 ], flag: 0, tc: [ -2074, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const inside_castle_seg7_dl_070515B0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07051370, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07051460, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 2,  1, 10, 0x0,  2, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07051560, 5, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  4, 0x0),
	Gbi.gsSP1Triangle( 3,  2,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07051678 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070515B0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

