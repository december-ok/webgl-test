function initPointerBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);
  const colorBuffer = initColorBuffer(gl);
  const indexBuffer = initIndexBuffer(gl);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };
}

function initPositionBuffer(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const boxSize = 0.1;

  // Now create an array of positions for the square.
  const positions = [
    // Front face
    -boxSize,
    -boxSize,
    boxSize,
    boxSize,
    -boxSize,
    boxSize,
    boxSize,
    boxSize,
    boxSize,
    -boxSize,
    boxSize,
    boxSize,

    // Back face
    -boxSize,
    -boxSize,
    -boxSize,
    -boxSize,
    boxSize,
    -boxSize,
    boxSize,
    boxSize,
    -boxSize,
    boxSize,
    -boxSize,
    -boxSize,

    // Top face
    -boxSize,
    boxSize,
    -boxSize,
    -boxSize,
    boxSize,
    boxSize,
    boxSize,
    boxSize,
    boxSize,
    boxSize,
    boxSize,
    -boxSize,

    // Bottom face
    -boxSize,
    -boxSize,
    -boxSize,
    boxSize,
    -boxSize,
    -boxSize,
    boxSize,
    -boxSize,
    boxSize,
    -boxSize,
    -boxSize,
    boxSize,

    // Right face
    boxSize,
    -boxSize,
    -boxSize,
    boxSize,
    boxSize,
    -boxSize,
    boxSize,
    boxSize,
    boxSize,
    boxSize,
    -boxSize,
    boxSize,

    // Left face
    -boxSize,
    -boxSize,
    -boxSize,
    -boxSize,
    -boxSize,
    boxSize,
    -boxSize,
    boxSize,
    boxSize,
    -boxSize,
    boxSize,
    -boxSize,
  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

function initColorBuffer(gl) {
  const faceColors = [
    [1.0, 0.0, 0.0, 1.0], // Front face: red
    [1.0, 0.0, 0.0, 1.0], // Back face: red
    [1.0, 0.0, 0.0, 1.0], // Top face: red
    [1.0, 0.0, 0.0, 1.0], // Bottom face: red
    [1.0, 0.0, 0.0, 1.0], // Right face: red
    [1.0, 0.0, 0.0, 1.0], // Left face: red
  ];

  // Convert the array of colors into a table for all the vertices.

  var colors = [];

  for (var j = 0; j < faceColors.length; ++j) {
    const c = faceColors[j];
    // Repeat each color four times for the four vertices of the face
    colors = colors.concat(c, c, c, c);
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}

function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
  ];

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return indexBuffer;
}

export { initPointerBuffers };