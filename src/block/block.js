/**
 * BLOCK: Book Metadata
 *
 * Registering a dynamic block with Gutenberg.
 * Renders a block with to store metadata about a book in wp_postmeta table.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	PlainText,
    InspectorControls,
    BlockControls,
} = wp.editor;
const {
    PanelBody,
    TextareaControl,
    TextControl,
    Dashicon,
    Toolbar,
    Button,
    Tooltip,
} = wp.components;

registerBlockType( 'book-list/book-metadata-block', {
	title: __( 'About Book' ),
	icon: 'book',
	category: 'common',
	keywords: [
		__( 'Book' ),
		__( 'Book information' )
	],
	attributes: {
		author: {
			type: 'string',
			source: 'meta',
			meta: 'book_author',
		},
		publisher: {
			type: 'string',
			source: 'meta',
			meta: 'book_publisher',
		},
		synopsis: {
			type: 'string',
			source: 'meta',
			meta: 'book_synopsis',
		},
		language: {
			type: 'string',
			source: 'meta',
			meta: 'book_language',
		},
		pub_year: {
			type: 'string',
			source: 'meta',
			meta: 'book_year',
		},

		price: {
			type: 'string',
			source: 'meta',
			meta: 'book_price',
		},

		discount: {
			type: 'string',
			source: 'meta',
			meta: 'book_discount',
		},

		pages: {
			type: 'string',
			source: 'meta',
			meta: 'book_pages',
		}
	},
	edit: function( props ) {
		function onAuthorChange( thisValue ) {
			props.setAttributes( { author: thisValue } );
		}

        function onPublisherChange( thisValue ) {
            props.setAttributes( { publisher: thisValue } );
        }

        function onSynopsisChange( thisValue ) {
            props.setAttributes( { synopsis: thisValue } );
        }

        function onLanguageChange( thisValue ) {
			props.setAttributes( { language: thisValue } );
		}

		function onYearChange( thisValue ) {
			props.setAttributes( { pub_year: thisValue } );
		}

		function onPriceChange( thisValue ) {
			props.setAttributes( { price: thisValue } );
		}

		function onDiscountChange( thisValue ) {
			props.setAttributes( { discount: thisValue } );
		}

		function onPagesChange( thisValue ) {
			props.setAttributes( { pages: thisValue } );
		}

		function onAuthorBlur() {
			if( '' === props.attributes.author ) {
                alert( 'Author name cannot be empty');
            }
		}

		function onPriceBlur() {
			if( '' === props.attributes.price ) {
				alert( 'Price cannot be empty' );
			}
		}

		return(
			<div id="book-metadata">

                <InspectorControls key="inspector">
                    <PanelBody title={ __('Pricing') }>
                        <TextControl
                            label={ __( 'Printed Price' ) }
							placeholder={ __( 'Original Price' ) }
							value={ props.attributes.price }
							onChange={ onPriceChange }
							onBlur={ onPriceBlur }
							maxLength="15"
                        />
                        <TextControl
                            label={ __( 'Discount (%)' ) }
							placeholder={ __( 'Discount in percent' ) }
							value={ props.attributes.discount }
							onChange={ onDiscountChange }
							maxLength="6"
                        />
                    </PanelBody>
                    <PanelBody title={ __('Publication') }>
                        <TextControl
                            label={ __( 'Publisher' ) }
                            value={ props.attributes.publisher }
                            onChange={ onPublisherChange }
                            maxLength="35"
                        />
                        <TextControl
                            label={ __( 'Year of Publication' ) }
                            value={ props.attributes.pub_year }
                            onChange={ onYearChange }
                            maxLength="4"
                        />
                    </PanelBody>
                    <PanelBody title={ __('Language and others') }>
                        <TextControl
                            label={ __( 'Language' ) }
                            value={ props.attributes.language }
                            onChange={ onLanguageChange }
                            maxLength="35"
                        />
                        <TextControl
                            label={ __( 'No. of Pages' ) }
							value={ props.attributes.pages }
							onChange={ onPagesChange }
							maxLength="4"
                        />
                    </PanelBody>
                </InspectorControls>

				<h3>About the book</h3>
				<div className="book-author">
					<label>Author</label>
					<PlainText
						placeholder={ __( 'Book author' ) }
						value={ props.attributes.author || '' }
						onChange={ onAuthorChange }
						onBlur={ onAuthorBlur }
						maxLength="50"
					/>
				</div>
                <div className="book-synopsis">
                    <label>Brief</label>
                    <PlainText
                        placeholder={ __( 'A brief about this book within 1000 characters' ) }
                        value={ props.attributes.synopsis || '' }
                        onChange={ onSynopsisChange }
						aria-multiline="true"
						rows="6"
						columns="30"
                        maxLength="1000"
                    />
                </div>
			</div>
		);
	},
	save: function( props ) {
		return null;
	}
} );
