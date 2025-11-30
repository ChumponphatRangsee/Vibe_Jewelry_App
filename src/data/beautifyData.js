// Beautify settings with default values
export const beautifySettings = {
    smooth: {
        id: 'smooth',
        label: 'Smooth',
        min: 0,
        max: 100,
        default: 0,
        unit: '%'
    },
    brightness: {
        id: 'brightness',
        label: 'Brightness',
        min: -50,
        max: 50,
        default: 0,
        unit: '%'
    },
    contrast: {
        id: 'contrast',
        label: 'Contrast',
        min: -50,
        max: 50,
        default: 0,
        unit: '%'
    },
    saturation: {
        id: 'saturation',
        label: 'Saturation',
        min: -50,
        max: 50,
        default: 0,
        unit: '%'
    }
};

// Convert beautify values to CSS filter string
export const getBeautifyFilter = (values) => {
    const filters = [];

    // Smooth (using blur)
    if (values.smooth > 0) {
        const blurAmount = (values.smooth / 100) * 1.5; // Max 1.5px blur
        filters.push(`blur(${blurAmount}px)`);
    }

    // Brightness
    if (values.brightness !== 0) {
        const brightnessValue = 1 + (values.brightness / 100);
        filters.push(`brightness(${brightnessValue})`);
    }

    // Contrast
    if (values.contrast !== 0) {
        const contrastValue = 1 + (values.contrast / 100);
        filters.push(`contrast(${contrastValue})`);
    }

    // Saturation
    if (values.saturation !== 0) {
        const saturationValue = 1 + (values.saturation / 100);
        filters.push(`saturate(${saturationValue})`);
    }

    return filters.length > 0 ? filters.join(' ') : 'none';
};

// Default beautify values
export const defaultBeautifyValues = {
    smooth: 0,
    brightness: 0,
    contrast: 0,
    saturation: 0
};
