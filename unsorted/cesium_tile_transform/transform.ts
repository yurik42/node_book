import fs from "fs";
import path from "path";

import { Cartographic } from "cesium";
import { Matrix4 } from "cesium";
import { Transforms } from "cesium";

// 	Mike_Niwot_mesh_NORMALIZE_3D_tiles:
//	-105.0375565181 39.937157238 1624.6099999999

const lonDegrees = -105.0375565181;
const latDegrees = 39.937157238;
const height = 1624.6099999999;
const cartographic = Cartographic.fromDegrees(
    lonDegrees,
    latDegrees,
    height
);

const cartesian = Cartographic.toCartesian(cartographic);
const enuMatrix = Transforms.eastNorthUpToFixedFrame(cartesian);
const transform = Matrix4.toArray(enuMatrix);

{
    const text = JSON.stringify(transform, null, 2);
    console.log(text);
}
{
    const text = JSON.stringify(cartographic, null, 2);
    console.log("cartographic: %s", text);
}

var root = {
    geo_location_degrees: [
        lonDegrees,
        latDegrees,
        height
    ],
    cartographic: cartographic,
    cartesian: cartesian,
    enuMatrix: enuMatrix,
    transform: transform
}

{
    const text = JSON.stringify(root, null, 2);
    console.log("root: %s", text);

    if (!fs.existsSync("out"))
        fs.mkdirSync("out");
    fs.writeFileSync("out/root.json", text);
}

console.log('Done...');