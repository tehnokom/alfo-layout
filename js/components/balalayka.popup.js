//Функция открытия попапа
//=================================================================
function balPopup(id, action)
{
	if(action == 'open')
	{
		$('.bal_popups_bg').addClass('open');
		$('#' + id).addClass('open');
	}
	else if(action == 'close')
	{
		if(id == 'all')
		{
			$('.bal_popups_bg').removeClass('open');
			$('.bal_popup').removeClass('open');
		}
		else
		{
			$('.bal_popups_bg').removeClass('open');
			$('#' + id).removeClass('open');
		}

		//$('input, button, select, button').removeClass('wrong').poshytip('hide');

		$('[data-bal-popup]').removeClass('popup_open');
	}
}


//Показ алерта
//=================================================================
function balAlert(title, text)
{
	balPopup('all', 'close');
	$('#alert').children('.bal_title').html(title);
	$('#alert').children('.bal_text').html(text);
	balPopup('alert', 'open');
}


$(function()
{


	//Открытие попапов по клику на элементы с атрибутом data-open-popup
	if($('[data-bal-popup]').length > 0)
	{
		$('[data-bal-popup]').each(function()
		{
			var	$e = $(this),
				popupId = $e.attr('data-bal-popup');

			$e.click(function()
			{
				balPopup(popupId, 'open');
				$e.addClass('popup_open');
			});
		});
	}

	//События при клике на крестик, «отмена» или фон для попапов
	if($('.bal_popup').length > 0)
	{
		$('.bal_popup').each(function()
		{
			var	$e = $(this),
				$close = $e.find('[data-bal-action="close"]');

			//Если первый потомок попапа не body, выносим его туда
			if($e.parent('body').length == 0)
			{
				$e.appendTo('body');
			}

			$close.click(function()
			{
				balPopup($e.attr('id'), 'close');
			});
		});

		$('.bal_popups_bg').click(function()
		{
			balPopup('all', 'close');
		});

		$(document).keyup(function(event)
		{
			if(event.keyCode == 27)
			{
				balPopup('all', 'close');
			}
		});
	}


});