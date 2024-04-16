import fs from "fs";
import path from "path";

import { Cartographic } from "cesium";
import { Matrix4 } from "cesium";
import { Transforms } from "cesium";

import assert from 'assert';

describe('Transforms', function () {
    it('compute transform', function () {
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

        // console.log(JSON.stringify(transform, null, 2));

        assert.equal(transform[3], 0);
        assert.equal(transform[7], 0);
        assert.equal(transform[11], 0);
        assert.equal(transform[15], 1);
    });

    it('compute transform 2', function () {
        const lonDegrees = -69.9382028426;
        const latDegrees = 43.8979944507;
        const height = -5.491136942;
        const cartographic = Cartographic.fromDegrees(
            lonDegrees,
            latDegrees,
            height
        );

        const cartesian = Cartographic.toCartesian(cartographic);
        const enuMatrix = Transforms.eastNorthUpToFixedFrame(cartesian);
        const transform = Matrix4.toArray(enuMatrix);

        // console.log(JSON.stringify(transform, null, 2));

        assert.equal(transform[0], 0.9393231837175708);
        assert.equal(transform[1], 0.34303346269815516);
        assert.equal(transform[2], 0);
        assert.equal(transform[3], 0);
        assert.equal(transform[4], -0.2378513774236182);
        assert.equal(transform[5], 0.6513047191834913);
        assert.equal(transform[6], 0.7205753846940657);
        assert.equal(transform[7], 0);
        assert.equal(transform[8], 0.24718146934666058);
        assert.equal(transform[9], -0.6768531644593432);
        assert.equal(transform[10], 0.6933766039988651);
        assert.equal(transform[11], 0);
        assert.equal(transform[12], 1579099.101018939);
        assert.equal(transform[13], -4324022.453400844);
        assert.equal(transform[14], 4399927.829667903);
        assert.equal(transform[15], 1);
    });
});