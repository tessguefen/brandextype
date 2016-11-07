function Types_Batchlist() {
	MMBatchList.call( this, 'BXTTypes' );
	this.Feature_SearchBar_SetPlaceholderText( 'Search Types...' );
	this.SetDefaultSort( 'id', '' );
	this.Feature_Delete_Enable('Delete Type(s)');
	this.Feature_Edit_Enable('Edit Type(s)');
	this.Feature_RowDoubleClick_Enable();
	this.Feature_GoTo_Enable('Go To Type', '');
	this.Feature_Add_Enable('Add Type');
}

DeriveFrom( MMBatchList, Types_Batchlist );

Types_Batchlist.prototype.onLoad = Types_List_Load_Query;

Types_Batchlist.prototype.onCreateRootColumnList = function() {
	var columnlist =
	[
		new MMBatchList_Column_Name( 'Type ID', 'id', 'id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_Text( 'Code', 'code', 'code' ),
		new MMBatchList_Column_Text( 'Name', 'name', 'name' )
	];
	return columnlist;
}

// On Save/ Edit
Types_Batchlist.prototype.onSave = function( item, callback, delegator ) {
	var wrapped_callback = function( response ) {
		if ( response.success )
		item.record.image_prev = item.record.image;
		item.record.icon_prev = item.record.icon;
		callback( response );
	}
	Types_Update( item.record.id, item.record.mmbatchlist_fieldlist, wrapped_callback, delegator );
}

// On Delete
Types_Batchlist.prototype.onDelete = function( item, callback, delegator ) {
	Types_Batchlist_Delete( item.record.id, callback, delegator );
}
// on Goto
Types_Batchlist.prototype.onGoTo = function( item, e ) {
	return OpenLinkHandler( e, adminurl, { 'Screen': 'SUTL', 'Store_Code': Store_Code, 'Tab': 'BXTTypes', 'BXTScreen': 'VIEWTYPE', 'View_Type': item.record.id, 'Module_Type': 'util', 'Module_Code': 'brandextype' } );
}
Types_Batchlist.prototype.onCreate = function() {
	var record;
	record = new Object();
	record.id = 0;
	record.code = '';
	record.name = '';
	return record;
}
// On Create
Types_Batchlist.prototype.onInsert = function( item, callback, delegator ) {
	Types_Batchlist_Insert( item.record.mmbatchlist_fieldlist, callback, delegator );
}