// ======== Datepicker ========
$('.datepicker').datepicker();

// ========= tooltip initialize========
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//   ========popover=======
$(function () {
    $('[data-toggle="popover"]').popover()
    
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })
  // ========alerts=======
  $('.alert').alert()