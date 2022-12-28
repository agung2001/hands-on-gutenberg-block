const { registerBlockType } = wp.blocks;

/** Register Block */
registerBlockType('hands-on-gutenberg-block/hello-world',{
	/** Built-in attributes */
	title: `Hello World`,
	description: `Just another simple WordPress block`,
	icon: `admin-site`,
	category: 'design',

	/** Custom Attributes */
	attributes: {
		author: {
			type: `string`
		}
	},

	/** Built-in functions */
	// Gutenberg Editing
	edit({attributes, setAttributes}){
		return <>
			Hello
			<input type="text"
			   value={attributes.author}
			   onChange={(event) => { setAttributes({ author: event.target.value }) }}
			/>
		</>
	},

	// Render to Frontend
	save({ attributes }){
		return <>
			Hello {attributes.author}
		</>
	},
})
