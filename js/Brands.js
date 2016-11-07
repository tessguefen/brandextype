function Brands_Batchlist() {
	MMBatchList.call( this, 'BXTBrands' );
	this.Feature_SearchBar_SetPlaceholderText( 'Search Brands...' );
	this.SetDefaultSort( 'id', '' );
	this.Feature_Delete_Enable('Delete Brand(s)');
	this.Feature_Edit_Enable('Edit Brand(s)');
	this.Feature_RowDoubleClick_Enable();
	this.Feature_GoTo_Enable('Go To Brand', '');
	this.Feature_Add_Enable('Add Brand');
}

DeriveFrom( MMBatchList, Brands_Batchlist );

Brands_Batchlist.prototype.onLoad = Brands_List_Load_Query;

Brands_Batchlist.prototype.onCreateRootColumnList = function() {
	var columnlist =
	[
		new MMBatchList_Column_Name( 'Brand ID', 'id', 'id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_Text( 'Code', 'code', 'code' ),
		new MMBatchList_Column_Text( 'Name', 'name', 'name' ),
		new MMBatchList_Column_Image_Upload( 'Image', 'image', 'image'),
		new MMBatchList_Column_ImagePreview( 'Image Preview', 'image_prev', 'image_prev'),
		new MMBatchList_Column_Image_Upload( 'Icon', 'icon', 'icon'),
		new MMBatchList_Column_ImagePreview( 'Icon Preview', 'icon_prev', 'icon_prev')
	];
	return columnlist;
}

// On Save/ Edit
Brands_Batchlist.prototype.onSave = function( item, callback, delegator ) {
	var wrapped_callback = function( response ) {
		if ( response.success )
		item.record.image_prev = item.record.image;
		item.record.icon_prev = item.record.icon;
		callback( response );
	}
	Brands_Update( item.record.id, item.record.mmbatchlist_fieldlist, wrapped_callback, delegator );
}

// On Delete
Brands_Batchlist.prototype.onDelete = function( item, callback, delegator ) {
	Brands_Batchlist_Delete( item.record.id, callback, delegator );
}
// on Goto
Brands_Batchlist.prototype.onGoTo = function( item, e ) {
	return OpenLinkHandler( e, adminurl, { 'Screen': 'SUTL', 'Store_Code': Store_Code, 'Tab': 'BXTBrands', 'BXTScreen': 'VIEWBRAND', 'View_Brand': item.record.id, 'Module_Type': 'util', 'Module_Code': 'brandextype' } );
}
Brands_Batchlist.prototype.onCreate = function() {
	var record;
	record = new Object();
	record.id = 0;
	record.code = '';
	record.name = '';
	record.image = '';
	record.image_prev = '';
	record.icon = '';
	record.icon_prev = '';
	return record;
}
// On Create
Brands_Batchlist.prototype.onInsert = function( item, callback, delegator ) {
	Brands_Batchlist_Insert( item.record.mmbatchlist_fieldlist, callback, delegator );
}