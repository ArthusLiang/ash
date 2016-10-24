Title: Ash.S
SortIndex: 2
---

# Constructor

| parameter       | optional      | description                                       |
| ----------------|:-------------:| --------------------------------------------------|
| scripts         | No            | An array to ojbect to descript the animation      |
| renderGap       | Yes           | How many frame for each rendering                 |
| endFunc         | Yes           | Callback function when the animation ends         |
| stopFunc        | Yes           | Callback function when the animation is stopped   |

# function

### play

play the animation from one frame to another.

| parameter       | optional      | description                                                     |
| ----------------|:-------------:| ----------------------------------------------------------------|
| startFrame      | Yes           | Define the frame to start the animation. Default 1              |
| endFrame        | Yes           | Define the frame to end the animation. Default the last frame   |
| repeat          | Yes           | How many times will the animation repeat. Default 1             |

### continue
play the animation from where it stopped.

### stop
stop the animation.

### reverse
play the animation from the endFrame to the startFrame.

### repeat
repeat the animation

| parameter       | optional      | description                                                     |
| ----------------|:-------------:| ----------------------------------------------------------------|
| num             | Yes           | How many times will the animation repeat Default 1              |

# property