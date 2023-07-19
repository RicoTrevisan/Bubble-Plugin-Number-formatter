function(instance, properties, context) {

    let number = properties.number;
    let locale = properties.locale;
    let compactDisplay = properties.compactDisplay;
    if (compactDisplay == "narrow") {let compactDisplay = "short";};
        
    let options;
    if (!properties.advanced_options) {
        options = {
            notation: "compact",
            compactDisplay: compactDisplay,
        };
    } else {
        const advanced_options = JSON.parse(properties.advanced_options);
        options = advanced_options;
    }
    
	let formatter = new Intl.NumberFormat( [locale, "en-US"], options);

    let n = formatter.format(number);
    instance.publishState("compacted_number", n);



}