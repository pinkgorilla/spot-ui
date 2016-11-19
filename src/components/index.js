
export function configure(config) {
    config.globalResources(
        './pagination',

        './converters/currency-format',
        './converters/date-format',

        './form/basic/checkbox',
        './form/basic/datepicker',
        './form/basic/dropdown',
        './form/basic/multiline',
        './form/basic/numeric',
        './form/basic/radiobutton',
        './form/basic/textbox',

        './form/auto-suggests/auto-suggest', 
        './form/auto-suggests/uom-auto-suggest', 
    );
}
