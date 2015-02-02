/**
 * jquery.sounds v1.0.2
 * https://github.com/fdev/jquery.sounds
 *
 * © 2015 Folkert de Vries <info@fdev.nl>
 * Released under MIT License
 */
(function($) {
	var muted, settings, sounds, supported

	function checkSupport() {
		if (typeof Audio !== "function" && typeof Audio !== "object")
			return false
		var mpeg = new Audio().canPlayType(settings ? settings.mimetype : 'audio/mpeg')
		if (mpeg != "probably" && mpeg != "maybe")
			return false
		return true
	}

	$.sounds = function(options) {
		settings = $.extend({
			sounds: [],
			path: '',
			extension: '.mp3',
			mimetype: 'audio/mpeg',
			volume: 0.5,
			preload: true
		}, options)

		supported = checkSupport()
		if (!supported)
			return console.warn('No audio support.')

		sounds = {}
		for (var i = 0; i != settings.sounds.length; ++i) {
			var name = settings.sounds[i]
			var sound = new Audio()
			sound.src = settings.path + name + settings.extension
			sound.load()
			sound.preload = settings.preload
			sound.volume = settings.volume
			sounds[name] = sound
		}
	}

	$.sounds.support = function() {
		if (typeof supported === 'undefined')
			supported = checkSupport()
		return supported
	}

	$.sounds.play = function(name, volume) {
		if (!supported)
			return
		if (!(name in sounds))
			return console.error('Unknown sound: ' + name)
		if (muted)
			return
		var sound = sounds[name]
		sound.volume = typeof volume !== 'undefined' ? volume : settings.volume
		try {
			sound.currentTime = 0
		}
		catch (e) {}
		sound.play()
	}

	$.sounds.mute = function(flag) {
		muted = flag
	}
})(jQuery)
