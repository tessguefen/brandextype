function Brands_List_Load_Query( filter, sort, offset, count, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'Brands_Load_Query',
								'&Filter=' + EncodeArray( filter ) +
								'&Sort=' + encodeURIComponent( sort ) +
								'&Offset=' + encodeURIComponent( offset ) +
								'&Count=' + encodeURIComponent( count ),
								delegator );
}
//On Edit
function Brands_Update( id, fieldlist, callback, delegator ) {
	return AJAX_Call_Module_FieldList(	callback,
										'admin',
										'brandextype',
										'Brand_Update',
										'Brand_ID=' +
										encodeURIComponent( id ),
										fieldlist,
										delegator );
}
// On Delete
function Brands_Batchlist_Delete( id, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'Brand_Delete',
								'Brand=' + encodeURIComponent( id ),
								delegator );
}
// On Create
function Brands_Batchlist_Insert( fieldlist, callback, delegator ) {
	return AJAX_Call_Module_FieldList(	callback,
										'admin',
										'brandextype',
										'Brand_Insert',
										'',
										fieldlist,
										delegator );
}