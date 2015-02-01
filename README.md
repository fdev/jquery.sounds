# jQuery.sounds

A tiny jQuery plugin for playing sounds.

## Description

The purpose of this plugin is to provide basic sound playback functionality with a tiny footprint.
When minified the plugin is a mere **805 bytes**.

## Browser support

This plugin works on browsers supporting `Audio`.
A [http://caniuse.com/#feat=audio](list of compatible browsers) is available on caniuse.com.

The plugin doesn't provide any fallback if the `Audio` object is not available, or if it doesn't support the configured mimetype.

## Dependencies

* jQuery (or compatible)

## Usage

Import this plugin after importing the jQuery library:

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.sounds.min.js"></script>
```

### Initialization

First you have to initialize the plugin with a list of sounds to load.

```javascript
$.sounds({
	sounds: [
		'click',
		'info',
		'message',
		'hang-up',
		'ringing'
	],
	path: 'sounds/'
})
```

After that you can play sounds.

```javascript
$.sounds.play('click')
```

## Settings


Setting       | Default      | Description
------------- | ------------ | -----------
sounds        | []           | List of sound names, without path and extension.
path          | ''           | Path where sound files, for example `'sounds/'`.
extension     | '.mp3'       | Extension of the sound files.
mimetype      | 'audio/mpeg' | The mimetype of the sound files. Used to determine browser support.
volume        | 0.5          | Default volume of all sounds when played (0.0-1.0).
preload       | true         | If true all sounds will be preloaded.


## Methods

### $.sounds.play(name, [volume])

The name should match one of the sound names given on initialization.
You can optionally override the default volume.

```javascript
// Play sound
$.sounds.play('click')

// Play soft
$.sounds.play('click', 0.2)

// Play loud
$.sounds.play('click', 1.0)
```

### $.sounds.mute(flag)

Mute all sounds.

```javascript
// Turn off all sounds
$.sounds.mute(true)

// Turn them back on
$.sounds.mute(false)
```

