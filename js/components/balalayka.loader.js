$(function()
{


	//Лоадер
	//=================================================================
	if($('.bal_loader').length > 0)
	{

		$('.bal_loader[data-bal-role="page"]').each(function()
		{

			var	$e = $(this);

			$e.addClass('loading');

			$(window).load(function()
			{
				$e.removeClass('loading');
			});

		});

	}


});