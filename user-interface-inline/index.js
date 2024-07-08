/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Productivity features require license key to work properly, you can get a trial license key: https://orders.ckeditor.com/trial/premium-features?feature=pagination
const PRODUCTIVITY_PACK_LICENSE_KEY = '';

import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
// Productivity Pack features
import SlashCommand from '@ckeditor/ckeditor5-slash-command/src/slashcommand';

const defaultConfig = {
	plugins: [
		Essentials,
		UploadAdapter,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKFinder,
		CloudServices,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Base64UploadAdapter,
		Indent,
		Link,
		List,
		Mention,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation,
		// SlashCommand,
	],
	licenseKey: PRODUCTIVITY_PACK_LICENSE_KEY,
	toolbar: [
		'undo',
		'redo',
		'|',
		'heading',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'uploadImage',
		'insertTable',
		'blockQuote',
		'|',
		'bulletedList',
		'numberedList',
		'|',
		'outdent',
		'indent',
	],
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1',
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2',
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3',
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4',
			},
		],
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
};

const headerConfig = {
	plugins: [
		Essentials,
		Autoformat,
		Bold,
		Italic,
		Heading,
		Link,
		Paragraph
	],
	toolbar: [
		'heading',
		'|',
		'bold',
		'italic',
		'link'
	],
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
		]
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://'
	}
};

const inlineElementsIds = [ 'inline-header', 'inline-main', 'inline-footer-first', 'inline-footer-second' ];

inlineElementsIds.forEach( id => {
	const element = document.getElementById( id );

	if ( !element ) {
		return;
	}

	InlineEditor
		.create( element, id === 'inline-header' ? headerConfig : defaultConfig )
		.then( editor => {
			window.editor = editor;
		} ).catch( error => {
			console.error( error.stack );
		} );
} );
