function Types_List_Load_Query( filter, sort, offset, count, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'Types_Load_Query',
								'&Filter=' + EncodeArray( filter ) +
								'&Sort=' + encodeURIComponent( sort ) +
								'&Offset=' + encodeURIComponent( offset ) +
								'&Count=' + encodeURIComponent( count ),
								delegator );
}
//On Edit
function Types_Update( id, fieldlist, callback, delegator ) {
	return AJAX_Call_Module_FieldList(	callback,
										'admin',
										'brandextype',
										'Type_Update',
										'Type_ID=' +
										encodeURIComponent( id ),
										fieldlist,
										delegator );
}
// On Delete
function Types_Batchlist_Delete( id, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'Type_Delete',
								'Type=' + encodeURIComponent( id ),
								delegator );
}
// On Create
function Types_Batchlist_Insert( fieldlist, callback, delegator ) {
	return AJAX_Call_Module_FieldList(	callback,
										'admin',
										'brandextype',
										'Type_Insert',
										'',
										fieldlist,
										delegator );
}