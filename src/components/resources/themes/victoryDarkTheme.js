/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import assign from 'lodash/assign';

// Colors
const yellow200 = '#FFF59D';
const deepOrange600 = '#F4511E';
const lime300 = '#DCE775';
const lightGreen500 = '#8BC34A';
const teal700 = '#00796B';
const cyan900 = '#006064';
const blueGrey50 = '#ECEFF1';
const blueGrey300 = '#90A4AE';
const grey700 = '#616161';
const grey500 = '#9E9E9E';
const colors = [
    deepOrange600,
    yellow200,
    lime300,
    lightGreen500,
    teal700,
    cyan900,
];

// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = 'normal';
const fontSize = 14;
const fontSizeSmall = 12;

// Layout
const padding = 10;
const axisLabelPadding = 30;
const tickLabelpadding = 0;
const baseProps = {
    width: 800,
    height: 450,
    padding: 50,
    colorScale: colors,
};

// Labels
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding,
    fill: grey500,
    stroke: 'transparent',
};

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);

// Strokes
const strokeDasharray = 'none';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';
const strokeOpacity = '.15';

const victoryDarkTheme = {
    area: assign({
        style: {
            data: {
                fill: grey700,
            },
            labels: centeredLabelStyles,
        },
    }, baseProps),
    axis: assign({
        style: {
            axis: {
                fill: 'transparent',
                stroke: grey700,
                strokeWidth: 1,
                strokeLinecap,
                strokeLinejoin,
            },
            axisLabel: assign({}, centeredLabelStyles, {
                padding: axisLabelPadding,
                stroke: 'transparent',
            }),
            grid: {
                fill: 'transparent',
                stroke: grey700,
                strokeDasharray,
                strokeLinecap,
                strokeLinejoin,
                strokeOpacity,
            },
            ticks: {
                fill: 'transparent',
                size: 10,
                stroke: grey700,
                strokeWidth: 1,
                strokeLinecap,
                strokeLinejoin,
                strokeOpacity,
            },
            tickLabels: assign({}, baseLabelStyles, {
                fontSize: fontSizeSmall,
                fill: grey700,
                stroke: 'transparent',
                padding: tickLabelpadding,
            }),
        },
    }, baseProps),
    bar: assign({
        style: {
            data: {
                fill: grey500,
                padding,
                stroke: 'transparent',
                strokeWidth: 0,
                width: 5,
            },
            labels: baseLabelStyles,
        },
    }, baseProps),
    candlestick: assign({
        style: {
            data: {
                stroke: grey500,
                strokeWidth: 1,
            },
            labels: centeredLabelStyles,
        },
        candleColors: {
            positive: blueGrey50,
            negative: grey500,
        },
    }, baseProps),
    chart: baseProps,
    errorbar: assign({
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: grey500,
                strokeWidth: 2,
            },
            labels: assign({}, centeredLabelStyles, {
                stroke: 'transparent',
                strokeWidth: 0,
            }),
        },
    }, baseProps),
    group: assign({
        colorScale: colors,
    }, baseProps),
    line: assign({
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: grey500,
                strokeWidth: 2,
            },
            labels: assign({}, baseLabelStyles, {
                stroke: 'transparent',
                strokeWidth: 0,
                textAnchor: 'start',
            }),
        },
    }, baseProps),
    pie: assign({
        colorScale: colors,
        style: {
            data: {
                padding,
                stroke: 'transparent',
                strokeWidth: 1,
            },
            labels: assign({}, baseLabelStyles, {
                padding: 20,
                stroke: 'transparent',
                strokeWidth: 0,
            }),
        },
    }, baseProps),
    scatter: assign({
        style: {
            data: {
                fill: grey500,
                opacity: 1,
                stroke: 'transparent',
                strokeWidth: 0,
            },
            labels: assign({}, centeredLabelStyles, {
                stroke: 'transparent',
            }),
        },
    }, baseProps),
    stack: assign({
        colorScale: colors,
    }, baseProps),
    tooltip: assign({
        style: {
            data: {
                fill: 'transparent',
                stroke: 'transparent',
                strokeWidth: 0,
            },
            labels: centeredLabelStyles,
            flyout: {
                stroke: grey500,
                strokeWidth: 1,
                fill: blueGrey50,
            },
        },
        flyoutProps: {
            cornerRadius: 10,
            pointerLength: 10,
        },
    }, baseProps),
    voronoi: assign({
        style: {
            data: {
                fill: 'transparent',
                stroke: 'transparent',
                strokeWidth: 0,
            },
            labels: centeredLabelStyles,
        },
    }, baseProps),
};

export default victoryDarkTheme;
