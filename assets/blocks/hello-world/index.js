const { registerBlockType } = wp.blocks;

/** Register Block */
registerBlockType('hands-on-gutenberg-block/hello-world',{
	/** Built-in attributes */
	title: `Hello World`,
	description: `Just another simple WordPress block`,
	icon: `format-image`,
	category: 'design',

	/** Custom Attributes */
	attributes: {},

	/** Built-in functions */
	edit(){},

	save(){},
})
