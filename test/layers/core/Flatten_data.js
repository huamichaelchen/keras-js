// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'core.Flatten.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] }
    },
    'core.Flatten.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] }
    },
    'core.Flatten.2': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2, 2] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2], shape: [12] }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
