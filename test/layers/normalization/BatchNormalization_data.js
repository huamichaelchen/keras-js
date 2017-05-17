// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'normalization.BatchNormalization.0': {
      input: {
        data: [
          0.193375,
          0.789956,
          0.069255,
          -0.988089,
          0.804359,
          0.509039,
          -0.655792,
          0.460058,
          -0.25375,
          -0.635374,
          -0.109318,
          -0.426266
        ],
        shape: [4, 3]
      },
      weights: [
        { data: [0.307179, -0.769986, 0.900566], shape: [3] },
        { data: [-0.387536, -0.469873, -0.60788], shape: [3] },
        { data: [-0.742023, -0.077688, -0.167692], shape: [3] },
        { data: [0.597806, 0.435934, 0.01687], shape: [3] }
      ],
      expected: {
        data: [
          -0.015911,
          -1.481707,
          1.034528,
          -0.485295,
          -1.498503,
          4.082906,
          -0.353277,
          -1.096984,
          -1.204392,
          -0.345165,
          -0.432986,
          -2.400193
        ],
        shape: [4, 3]
      }
    },
    'normalization.BatchNormalization.1': {
      input: {
        data: [
          0.718808,
          -0.159628,
          -0.955364,
          -0.945802,
          -0.433707,
          -0.559921,
          0.418526,
          0.035668,
          0.099925,
          0.537048,
          0.914591,
          -0.504129
        ],
        shape: [4, 3]
      },
      weights: [
        { data: [-0.211487, -0.648815, -0.854588], shape: [3] },
        { data: [0.311362, -0.228519, 0.253024], shape: [3] },
        { data: [-0.946541, 0.585593, -0.49527], shape: [3] },
        { data: [0.557039, 0.055171, 0.263987], shape: [3] }
      ],
      expected: {
        data: [
          -0.156355,
          1.665477,
          1.004194,
          0.311154,
          2.362055,
          0.358576,
          -0.07202,
          1.169128,
          -0.718718,
          -0.105307,
          -1.064677,
          0.267487
        ],
        shape: [4, 3]
      }
    },
    'normalization.BatchNormalization.2': {
      input: {
        data: [
          -0.920023,
          0.466664,
          0.332702,
          0.693696,
          -0.705391,
          0.385741,
          0.296606,
          0.805754,
          -0.876679,
          -0.140908,
          -0.817375,
          0.222433,
          -0.406426,
          0.144013,
          0.566715,
          0.215483,
          -0.18429,
          0.901878,
          0.31492,
          -0.560544,
          0.989602,
          0.265541,
          0.755267,
          0.664617
        ],
        shape: [4, 3, 2]
      },
      weights: [
        { data: [0.517906, -0.666537, 0.378665, -0.380062], shape: [4] },
        { data: [0.400557, 0.743871, 0.437134, -0.5548], shape: [4] },
        { data: [-0.726393, 0.961405, -0.352651, -0.616831], shape: [4] },
        { data: [0.91407, 0.630071, 0.508933, 0.052897], shape: [4] }
      ],
      expected: {
        data: [
          0.295668,
          1.046836,
          0.974269,
          1.16982,
          0.411934,
          1.003001,
          1.302105,
          0.874571,
          2.287317,
          1.669487,
          2.237519,
          1.364389,
          0.408591,
          0.700756,
          0.925121,
          0.738691,
          0.526497,
          1.103021,
          -2.094362,
          -0.647805,
          -3.209161,
          -2.012771,
          -2.821961,
          -2.672177
        ],
        shape: [4, 3, 2]
      }
    },
    'normalization.BatchNormalization.3': {
      input: {
        data: [
          0.177239,
          -0.818004,
          -0.955256,
          -0.625241,
          0.936162,
          0.471789,
          -0.251405,
          0.671525,
          -0.819759,
          0.468665,
          0.492218,
          0.014732,
          -0.415985,
          0.354683,
          -0.445545,
          -0.401559,
          0.68942,
          0.302571,
          -0.247906,
          -0.871673,
          -0.153346,
          -0.940188,
          0.924139,
          0.554809
        ],
        shape: [4, 3, 2]
      },
      weights: [
        { data: [-0.089873, -0.210305, -0.554444], shape: [3] },
        { data: [-0.997964, -0.487343, -0.350362], shape: [3] },
        { data: [-0.145437, 0.11872, -0.368563], shape: [3] },
        { data: [0.486933, 0.587355, 0.517041], shape: [3] }
      ],
      expected: {
        data: [
          -1.039522,
          -0.911343,
          -0.192635,
          -0.283194,
          -1.35639,
          -0.998328,
          -0.984316,
          -1.103182,
          -0.229817,
          -0.58337,
          -1.01408,
          -0.645908,
          -0.96312,
          -1.062375,
          -0.332504,
          -0.344574,
          -1.166136,
          -0.86785,
          -0.984767,
          -0.904431,
          -0.412686,
          -0.19677,
          -1.347119,
          -1.062342
        ],
        shape: [4, 3, 2]
      }
    },
    'normalization.BatchNormalization.4': {
      input: {
        data: [
          -0.929182,
          0.875771,
          -0.883762,
          0.72433,
          -0.585509,
          -0.152172,
          -0.775304,
          0.788189,
          -0.508879,
          0.009276,
          0.928936,
          -0.407103,
          0.022937,
          -0.299328,
          -0.616092,
          -0.951088,
          -0.779181,
          0.39148,
          -0.023818,
          0.37291,
          -0.119784,
          -0.941465,
          -0.9535,
          -0.687951
        ],
        shape: [4, 3, 2]
      },
      weights: [
        { data: [0.660544, -0.047716], shape: [2] },
        { data: [-0.956656, 0.127814], shape: [2] },
        { data: [-0.359373, -0.71013], shape: [2] },
        { data: [0.551285, 0.957558], shape: [2] }
      ],
      expected: {
        data: [
          -1.463575,
          0.050482,
          -1.423168,
          0.057867,
          -1.157833,
          0.100607,
          -1.326681,
          0.054753,
          -1.089661,
          0.092734,
          0.189464,
          0.113038,
          -0.616541,
          0.107782,
          -1.18504,
          0.139563,
          -1.33013,
          0.074097,
          -0.658135,
          0.075003,
          -0.74351,
          0.139094,
          -1.485209,
          0.126732
        ],
        shape: [4, 3, 2]
      }
    },
    'normalization.BatchNormalization.5': {
      input: {
        data: [
          0.295997,
          -0.197309,
          0.752622,
          -0.502156,
          -0.322833,
          0.698127,
          0.740562,
          -0.668644,
          -0.229012,
          -0.967928,
          -0.411317,
          0.458195,
          0.94757,
          0.256302,
          -0.571923,
          0.259773,
          -0.737641,
          -0.119598,
          -0.999641,
          0.772751,
          -0.900172,
          0.100827,
          0.17941,
          0.288567
        ],
        shape: [4, 3, 2]
      },
      weights: [{ data: [0.833294, -0.732828], shape: [2] }, { data: [0.013718, -0.842599], shape: [2] }],
      expected: {
        data: [
          0.84691,
          -0.10986,
          0.846988,
          -0.109791,
          -0.819544,
          -1.575399,
          0.846992,
          -0.109788,
          0.846959,
          -0.109817,
          -0.819535,
          -1.575391,
          0.846953,
          -0.109822,
          -0.819532,
          -1.575388,
          -0.819506,
          -1.575365,
          -0.819562,
          -1.575414,
          -0.819543,
          -1.575398,
          -0.818029,
          -1.574066
        ],
        shape: [4, 3, 2]
      }
    },
    'normalization.BatchNormalization.6': {
      input: {
        data: [
          -0.435983,
          -0.714349,
          -0.557696,
          -0.838492,
          0.885101,
          -0.155057,
          0.36079,
          0.909788,
          0.061332,
          -0.616654,
          0.853256,
          -0.279329,
          -0.308602,
          0.003971,
          -0.539738,
          0.186558,
          0.261057,
          0.11644,
          -0.980123,
          -0.455651,
          0.528218,
          0.999738,
          -0.665862,
          0.374054
        ],
        shape: [4, 3, 2]
      },
      weights: [{ data: [0.128705, -0.956067], shape: [2] }, { data: [-0.168081, -0.9895], shape: [2] }],
      expected: {
        data: [
          -0.252569,
          0.142873,
          -0.27886,
          0.351052,
          0.032798,
          -0.795018,
          -0.080458,
          -2.580686,
          -0.145144,
          -0.020954,
          0.025919,
          -0.586624,
          -0.225054,
          -1.061697,
          -0.274981,
          -1.367882,
          -0.102002,
          -1.250299,
          -0.370108,
          -0.290944,
          -0.044292,
          -2.731525,
          -0.302225,
          -1.682298
        ],
        shape: [4, 3, 2]
      }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
