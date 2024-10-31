document.addEventListener("DOMContentLoaded", function() {
  function setupFieldTypeSelect(element) {
    const fieldTypeSelect = element.querySelector(".field-type-select");
    const categoryFields = element.querySelector(".category-fields");

    if (fieldTypeSelect && categoryFields) {
      fieldTypeSelect.addEventListener("change", function() {
        if (fieldTypeSelect.value === "category") {
          categoryFields.style.display = "block";
        } else {
          categoryFields.style.display = "none";
        }
      });
    }
  }

  
  document.querySelectorAll('.nested-fields').forEach(setupFieldTypeSelect);

  document.addEventListener('cocoon:after-insert', function(e) {
    setupFieldTypeSelect(e.detail.insertedItem);
  });
});