/**
 * The document hooks for in-edit form
 *
 * Copyright (C) Nikolay V. Nemshilov
 */
document.onKeydown(function(event) {
  if (event.keyCode == 27 && InEdit.current)
    InEdit.current.hide();
});