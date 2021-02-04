# HTS Color-Saver

## About  

This service allows easy conversion between colors in the standard RGB band and the more intuitive HTS system (Hue, Tone, and Saturation).  I use the RGB => HSV conversion formulae developed by Albert H. Munsell et all [[1]](https://en.wikipedia.org/wiki/Munsell_color_system).  Users can save a palette of colors and corresponding hex-codes for application elsewhere.

## Contents

  1. [Setup](#Setup)
  1. [Usage](#Usage)
  1. [Example of Use](#Example-of-Use)
  1. [Roadmap](#Roadmap)
  1. [Development](#Development)
  1. [Math](#Math)
  1. [License](#License)
  1. [Notes](#Notes)

## Requirements

- None

## Setup

To clone and run this servce, you'll need [Git](https://git-scm.com) installed on your computer, and a modern browser.  From the command line:

```bash
# Clone this repo
$ git clone https://github.com/dtklumpp/hts-colors

# Go into the repository
$ cd hts-colors

# Run the app
$ open -a "Google Chrome" index.html
```

## Usage

1. Create a color using the HTS sliders
1. Click "convert" to convert into hex values
1. OR, click "Save Color" to start a palette
1. Keep adding more colors!
1. Re-order colors in your palette with the "+" & "-" knobs
1. Delete a color with the "X"
1. Press "Hex" to convert everything and start a new palette
    
## Example-of-Use

- ![color-saver-in-action](https://user-images.githubusercontent.com/65556316/106963164-30bfa080-670e-11eb-8faf-82be17608d4c.png)


## Roadmap -- pending features

- support 3-way RGBA conversion
- support color-selection in any of the 3 systems
- make an account (save palettes for later)
- compare multiple sets of palettes at once
- copy/paste a whole palette in Hex form as a reference

## Math

Key Conversions:
- color = (hue * 3 / 100)
- degree = color - Math.floor(color)
- ratio = (1 - 2 * Math.abs(degree - 0.5))


## Development

To help with a bug or add functionality, do this:

- Fork this repo
- Make a branch (`git checkout -b new-feature`)
- Make modifications where necessary
- Add comments corresponding to your changes
- Commit (`git commit -m 'explanation'`)
- Push up (`git push origin new-feature`)
- Make a Pull Request 


## License

MIT ©


## Notes
This is my own attempt at a bare-bones and practical utility for developers, but inspiration for this project included the "Coolors" trending color palettes [site](https://coolors.co/palettes/trending), the Paletton color wheel picker [tool](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF), and a lot of research on the history of [Computer Graphics](https://en.wikipedia.org/wiki/Computer_graphics)
