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
const { PlainText } = wp.editor;

registerBlockType( 'book-list/book-metadata-block', {
	title: __( 'Book Metadata Example' ),
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

		return(
			<div id="book-metadata">
				<h3>Book metadata</h3>
				<div className="book-author">
					<label>Book Author</label>
					<PlainText
						placeholder={ __( 'Book author' ) }
						value={ props.attributes.author || '' }
						onChange={ onAuthorChange }
						maxlength="50"
					/>
				</div>
                <div className="book-synopsis">
                    <label>Synopsis</label>
                    <PlainText
                        placeholder={ __( 'Synopsis' ) }
                        value={ props.attributes.synopsis || '' }
                        onChange={ onSynopsisChange }
						aria-multiline="true"
						rows="6"
						columns="30"
                        maxlength="250"
                    />
                </div>
                <div className="book-publisher">
                    <label>Publisher</label>
                    <PlainText
                        placeholder={ __( 'Publisher' ) }
                        value={ props.attributes.publisher || '' }
                        onChange={ onPublisherChange }
                        maxlength="50"
                    />
                </div>
                <div className="book-language">
                    <label>Language</label>
                    <PlainText
                        placeholder={ __( 'Language' ) }
                        value={ props.attributes.language || '' }
                        onChange={ onLanguageChange }
                        maxlength="50"
                    />
                </div>
                <div className="book-year">
                    <label>Year of publication</label>
                    <PlainText
                        placeholder={ __( 'Year of publication' ) }
                        value={ props.attributes.pub_year || '' }
                        onChange={ onYearChange }
                        maxlength="4"
                    />
                </div>
			</div>
		);
	},
	save: function( props ) {
		return null;
	}
} );
