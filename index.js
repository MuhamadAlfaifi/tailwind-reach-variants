const defaultTo = require('./utils/default-to.js');
const attributesSelectors = require('./reach-css-selectors.json');

function plugin({ addVariant, matchVariant }) {

    /**
     * Accordion Variants
     * @see https://reach.tech/accordion
     */
    for (const [variant, element] of [
        ['racc'],
        ['racc-itm', 'item'],
        ['racc-pan', 'panel'],
        ['racc-btn', 'button'],
    ]) {
        const selectors = element ? attributesSelectors.accordion[element] : attributesSelectors.accordion;

        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }
    
    /**
     * Alert Dialog Variants
     * @see https://reach.tech/alert-dialog
     */
    for (const [variant, element] of [
        ['rale-labl', 'label'],
        ['rale-desc', 'description'],
        ['rale-over', 'overlay'],
        ['rale-cont', 'content'],
    ]) {
        addVariant(variant, '&' + attributesSelectors['alert-dialog'][element].DEFAULT);
    }
    
    /**
     * Checkbox Variants
     * @see https://reach.tech/checkbox
     */
    for (const [variant, element] of [
        ['rech'],
        ['rche-con', 'container'],
        ['rche-inp', 'input'],
    ]) {
        const selectors = element ? attributesSelectors.checkbox[element] : attributesSelectors.checkbox;
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }
    
    /**
     * Combobox Variants
     * @see https://reach.tech/combobox
     */
    for (const [variant, element] of [
        ['rcom'],
        ['rcom-inp', 'input'],
        ['rcom-pop', 'popover'],
        ['rcom-lis', 'list'],
        ['rcom-opt-tex', 'option-text'],
    ]) {
        const selectors = element ? attributesSelectors.combobox[element] : attributesSelectors.combobox;
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }
    
    /**
     * Dialog Variants
     * @see https://reach.tech/dialog
     */
    for (const [variant, element] of [
        ['rdia-over', 'overlay'],
        ['rdia-cont', 'content'],
    ]) {
        const selectors = attributesSelectors.dialog[element];
        
        addVariant(variant, '&' + selectors.DEFAULT);
    }
    
    /**
     * Disclosure Variants
     * @see https://reach.tech/disclosure
     */
    for (const [variant, element] of [
        ['rdisc-btn', 'button'],
        ['rdisc-pan', 'panel'],
    ]) {
        const selectors = attributesSelectors.disclosure[element];
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }
    
    /**
     * Listbox Variants
     * @see https://reach.tech/listbox
     */
    for (const [variant, element] of [
        ['rlis-inp', 'input'],
        ['rlis-btn', 'button'],
        ['rlis-arr', 'arrow'],
        ['rlis-pop', 'popover'],
        ['rlis-lis', 'list'],
        ['rlis-opt', 'option'],
        ['rlis-gro', 'group'],
        ['rlis-gro-lab', 'group-label'],
    ]) {
        const selectors = element ? attributesSelectors.listbox[element] : attributesSelectors.listbox;
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }
    
    /**
     * MenuButton Variants
     * @see https://reach.tech/menu-button
     */
    for (const [variant, element] of [
        ['rmen-lis', 'list'],
        ['rmen-pop', 'popover'],
        ['rmen-itms', 'items'],
        ['rmen-itm', 'item'],
    ]) {
        const selectors = element ? attributesSelectors.menu[element] : attributesSelectors.menu;
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }
    
    /**
     * SkipNav Variants
     * @see https://reach.tech/skip-nav
     */
    {
        const selectors = attributesSelectors['skip-nav'];
        
        addVariant('r-skip-link', '&' + selectors.DEFAULT);
    }

    /**
     * Slider Variants
     * @see https://reach.tech/slider
     */
    for (const [variant, element] of [
        ['rsli'],
        ['rsli-tra', 'track'],
        ['rsli-ran', 'range'],
        ['rsli-mar', 'marker'],
        ['rsli-han', 'handle'],
    ]) {
        const selectors = element ? attributesSelectors.slider[element] : attributesSelectors.slider;
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }

    /**
     * Tabs Variants
     * @see https://reach.tech/tabs
     */
    for (const [variant, element] of [
        ['rtabs'],
        ['rtab-lis', 'list'],
        ['rtab', 'tab'],
        ['rtab-pan', 'tab-panel'],
    ]) {
        const selectors = element ? attributesSelectors.tabs[element] : attributesSelectors.tabs;
        
        matchVariant({
            [variant]: (attributeKey) => '&' + selectors.DEFAULT + defaultTo(selectors[attributeKey], ''),
        });
    }

    /**
     * Tooltip Variants
     * @see https://reach.tech/tooltip
     */
    {
        const selectors = attributesSelectors.tooltip;

        addVariant('rtool', '&' + selectors.DEFAULT);
    }
}

module.exports = plugin;