$(document).ready(function(){

	var w_v; 
	var h_v;     
	
	
	var forma; 
	var tolshina; 
	var rezka; 
	var faska; 
	var zakalka; 
	var kriv_obr; 
	var k_e; 
	var t_f; 
	var k_vo; 
	var z_pl; 
	var dost; 
	
	var k_s; 
	
	
	$("#vybor_diametr_otverstiya").css("display","none");
	$("#diametr_otverstiya").attr('disabled', true);
	
	$("#blok_steklo").css("display","inline-block");
	$("#blok_orgsteklo").css("display","none");
	$("#blok_zerkalo").css("display","none");
	
	$("#blok_obrabotka_evrokromka_facet").css("display","none");
	$("#tolshina_faceta").css("display","none");
	$("#tolshina_faceta").attr('disabled', true);
	
	$("#blok_obrabotka_krivolineinaya").css("display","none");
	
	$("#blok_zashit_plenka").css("display","none");
	
		
	$("#blok_steklo").addClass("disabled-blok");
	$("#blok_zerkalo").addClass("disabled-blok");
	$("#blok_orgsteklo").addClass("disabled-blok");
	$("#blok_tolshina").addClass("disabled-blok");
	$("#blok_forma").addClass("disabled-blok");
	$("#blok_razmery").addClass("disabled-blok");
	$("#blok_obrabotka").addClass("disabled-blok");
	$("#blok_service").addClass("disabled-blok");
	$("#blok_contakts_form").addClass("disabled-blok");
	
	
	function razmer_pole_cena() {
		if($("#cena").val()=="-")
			{$("#cena").css("max-width","10px");}
		if($("#cena").val()>=0 && $("#cena").val()<=9 && $("#cena").val()!="Цена")
			{$("#cena").css("max-width","15px");} 
		if($("#cena").val()=="Цена")
			{$("#cena").css("max-width","65px");}
		if($("#cena").val()>9)
			{$("#cena").css("max-width","30px");}
		if($("#cena").val()>99)
			{$("#cena").css("max-width","45px");}
		if($("#cena").val()>999)
			{$("#cena").css("max-width","3.7rem");}
		if($("#cena").val()>9999)
			{$("#cena").css("max-width","4.7rem");}
		if($("#cena").val()>99999)
			{$("#cena").css("max-width","5.6rem");}
		if($("#cena").val()>999999)
			{$("#cena").css("max-width","6.4rem");}
	}
	
	function ochistka() {
		$("#calc_form [type='radio']").attr('checked', false);
		$("#calc_form [type='checkbox']").attr('checked', false);
		$("#calc_form [type='text']").val("");
		
		$("#vvod_vysota").css("display","block");
		$("#vysota").attr('disabled', false);
		
		$("#vvod_diametr").css("display","none");
		$("#diametr").attr('disabled', true);
		
		$("#blok_obrabotka_evrokromka_facet").css("display","none");
		$("#blok_obrabotka_krivolineinaya").css("display","none");
		
		$("#vybor_diametr_otverstiya").css("display","none");
		$("#diametr_otverstiya").attr('disabled', true);
		
		$("#kolvo").val(1);		
	}
	
	function dzbled() {
	
		
		if($('input[name=vid_materiala]:checked').length > 0)
			{
				$("#blok_steklo").removeClass("disabled-blok");
				$("#blok_zerkalo").removeClass("disabled-blok");
				$("#blok_orgsteklo").removeClass("disabled-blok");
			}
		else{
				$("#blok_steklo").addClass("disabled-blok");
				$("#blok_zerkalo").addClass("disabled-blok");
				$("#blok_orgsteklo").addClass("disabled-blok");
			}
		
		
		if(($('input[name=vid_stekla]:checked').length > 0) || ($('input[name=vid_zerkala]:checked').length > 0) || ($('input[name=vid_orgstekla]:checked').length > 0) )
			{
				$("#blok_tolshina").removeClass("disabled-blok");
				$("#blok_forma").removeClass("disabled-blok");
			}
		else{
				$("#blok_tolshina").addClass("disabled-blok");
				$("#blok_forma").addClass("disabled-blok");
			}
		
		
		if($('input[name=vid_formy]:checked').length > 0)
			{
				$("#blok_razmery").removeClass("disabled-blok");
			}
		else{
				$("#blok_razmery").addClass("disabled-blok");
			}
			
		
		if((($("#shirina").val()>0) && ($("#vysota").val()>0)) || (($("#forma_krug").prop("checked")) && ($("#shirina").val()>0)))
			{
				$("#blok_obrabotka").removeClass("disabled-blok");
				$("#blok_service").removeClass("disabled-blok");
				$("#blok_contakts_form").removeClass("disabled-blok");
			}
		else{
				$("#blok_obrabotka").addClass("disabled-blok");
				$("#blok_service").addClass("disabled-blok");
				$("#blok_contakts_form").addClass("disabled-blok");
			}
	
	}
	
	function tolshina_materiala(){

		tolshina = $("#tolshina").val();
		
	}
	
	function forma_materiala(){
		if($("#material_steklo").prop("checked"))
			{
				$("#blok_forma_pryamougolnik").css("display","block");
				$("#blok_forma_krkazyabra").css("display","block");
				$("#blok_forma_krug").css("display","block");
				$("#blok_forma_oval").css("display","block");	
			}
		if($("#material_zerkalo").prop("checked"))
			{
				$("#blok_forma_pryamougolnik").css("display","block");
				$("#blok_forma_krkazyabra").css("display","block");
				$("#blok_forma_krug").css("display","block");
				$("#blok_forma_oval").css("display","block");	
			}
		if($("#material_orgsteklo").prop("checked"))
			{
				$("#blok_forma_pryamougolnik").css("display","block");
				$("#blok_forma_krkazyabra").css("display","none");
				$("#blok_forma_krug").css("display","block");
				$("#blok_forma_oval").css("display","none");
			}	
	}
	
	function shirina(){
		w_v = ($("#shirina").val()/1000);	
	}
	
	function vysota(){
			
		if($("#forma_krug").prop("checked"))
			{
				h_v = ($("#shirina").val()/1000);				
			}
		else
			{	h_v = ($("#vysota").val()/1000);
				$("#vvod_vysota").css("display","block");
				$("#vysota").attr('disabled', false);
			}
	}

	function gabarity_shirina(){
		if($("#steklo_prozrachnoe").prop("checked"))
		{
			if($("#shirina").val()>3200)
			{
				$("#shirina").val(3200);
			}
			if(($("#shirina").val()>2250) && ($("#vysota").val()>2250))
			{
				$("#shirina").val(2250);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>2250))
			{
				$("#shirina").val(2250);
			}
		}
		if($("#steklo_uzorchatoe").prop("checked"))
		{
			if($("#shirina").val()>2100)
			{
				$("#shirina").val(2100);
			}
			if(($("#shirina").val()>1600) && ($("#vysota").val()>1600))
			{
				$("#shirina").val(1600);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>1600))
			{
				$("#shirina").val(1600);
			}
		}
		if(($("#steklo_matovoe").prop("checked")) || ($("#steklo_grafit").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked")) || ($("#steklo_krashenoe").prop("checked")) || ($("#steklo_osvetlennoe").prop("checked")))
		{
			if($("#shirina").val()>2500)
			{
				$("#shirina").val(2500);
			}
			if(($("#shirina").val()>1600) && ($("#vysota").val()>1600))
			{
				$("#shirina").val(1600);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>1600))
			{
				$("#shirina").val(1600);
			}
		}
		if($("#zerkalo_akrilovoe").prop("checked"))
		{
			if($("#shirina").val()>2400)
			{
				$("#shirina").val(2400);
			}
			if(($("#shirina").val()>1200) && ($("#vysota").val()>1200))
			{
				$("#shirina").val(1200);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>1200))
			{
				$("#shirina").val(1200);
			}
		}
		if($("#zerkalo_dekorativnoe").prop("checked"))
		{
			if($("#shirina").val()>2500)
			{
				$("#shirina").val(2500);
			}
			if(($("#shirina").val()>1600) && ($("#vysota").val()>1600))
			{
				$("#shirina").val(1600);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>1600))
			{
				$("#shirina").val(1600);
			}
		}
		if($("#zerkalo_matovoe").prop("checked"))
		{
			if($("#shirina").val()>2500)
			{
				$("#shirina").val(2500);
			}
			if(($("#shirina").val()>1600) && ($("#vysota").val()>1600))
			{
				$("#shirina").val(1600);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>1600))
			{
				$("#shirina").val(1600);
			}
		}
		if(($("#zerkalo_obychnoe").prop("checked")) || ($("#zerkalo_vlaga").prop("checked")) || ($("#zerkalo_bronza").prop("checked")) || ($("#zerkalo_grafit").prop("checked")))
		{
			if($("#shirina").val()>3200)
			{
				$("#shirina").val(3200);
			}
			if(($("#shirina").val()>2250) && ($("#vysota").val()>2250))
			{
				$("#shirina").val(2250);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>2250))
			{
				$("#shirina").val(2250);
			}
		}
		if($("#orgsteklo_prozrachnoe").prop("checked"))
		{
			if($("#shirina").val()>3000)
			{
				$("#shirina").val(3000);
			}
			if(($("#shirina").val()>2000) && ($("#vysota").val()>2000))
			{
				$("#shirina").val(2000);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>2000))
			{
				$("#shirina").val(2000);
			}
		}
		if($("#orgsteklo_beloe").prop("checked"))
		{
			if($("#shirina").val()>3000)
			{
				$("#shirina").val(3000);
			}
			if(($("#shirina").val()>2000) && ($("#vysota").val()>2000))
			{
				$("#shirina").val(2000);
			}
			if(($("#forma_krug").prop("checked")) && ($("#shirina").val()>2000))
			{
				$("#shirina").val(2000);
			}
		}	
	}
	
	function gabarity_vysota(){
	
		if($("#steklo_prozrachnoe").prop("checked"))
		{
			if($("#vysota").val()>3200)
			{
				$("#vysota").val(3200);
			}
			if(($("#vysota").val()>2250) && ($("#shirina").val()>2250))
			{
				$("#vysota").val(2250);
			}
		}
		if($("#steklo_uzorchatoe").prop("checked"))
		{
			if($("#vysota").val()>2100)
			{
				$("#vysota").val(2100);
			}
			if(($("#vysota").val()>1600) && ($("#shirina").val()>1600))
			{
				$("#vysota").val(1600);
			}
		}
		if(($("#steklo_matovoe").prop("checked")) || ($("#steklo_grafit").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked")) || ($("#steklo_krashenoe").prop("checked")) || ($("#steklo_osvetlennoe").prop("checked")))
		{
			if($("#vysota").val()>2500)
			{
				$("#vysota").val(2500);
			}
			if(($("#vysota").val()>1600) && ($("#shirina").val()>1600))
			{
				$("#vysota").val(1600);
			}
		}
		if($("#zerkalo_akrilovoe").prop("checked"))
		{
			if($("#vysota").val()>2400)
			{
				$("#vysota").val(2400);
			}
			if(($("#vysota").val()>1200) && ($("#shirina").val()>1200))
			{
				$("#vysota").val(1200);
			}
		}
		if($("#zerkalo_dekorativnoe").prop("checked"))
		{
			if($("#vysota").val()>2500)
			{
				$("#vysota").val(2500);
			}
			if(($("#vysota").val()>1600) && ($("#shirina").val()>1600))
			{
				$("#vysota").val(1600);
			}
		}
		if($("#zerkalo_matovoe").prop("checked"))
		{
			if($("#vysota").val()>2500)
			{
				$("#vysota").val(2500);
			}
			if(($("#vysota").val()>1600) && ($("#shirina").val()>1600))
			{
				$("#vysota").val(1600);
			}
		}
		if(($("#zerkalo_obychnoe").prop("checked")) || ($("#zerkalo_vlaga").prop("checked")) || ($("#zerkalo_bronza").prop("checked")) || ($("#zerkalo_grafit").prop("checked")))
		{
			if($("#vysota").val()>3200)
			{
				$("#vysota").val(3200);
			}
			if(($("#vysota").val()>2250) && ($("#shirina").val()>2250))
			{
				$("#vysota").val(2250);
			}
		}
		if($("#orgsteklo_prozrachnoe").prop("checked"))
		{
			if($("#vysota").val()>3000)
			{
				$("#vysota").val(3000);
			}
			if(($("#vysota").val()>2000) && ($("#shirina").val()>2000))
			{
				$("#vysota").val(2000);
			}
		}
		if($("#orgsteklo_beloe").prop("checked"))
		{
			if($("#vysota").val()>3000)
			{
				$("#vysota").val(3000);
			}
			if(($("#vysota").val()>2000) && ($("#shirina").val()>2000))
			{
				$("#vysota").val(2000);
			}
		}	
	}
	
	function rezka_materiala(){
		rezka = 0;
		if($("#material_steklo").prop("checked"))
			{
				rezka = (w_v+h_v)*2*90;	
			}
		if($("#material_zerkalo").prop("checked"))
			{
				rezka = (w_v+h_v)*2*150;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="2 мм")
			{
				rezka = (w_v+h_v)*2*50;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="3 мм")
			{
				rezka = (w_v+h_v)*2*70;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="4 мм")
			{
				rezka = (w_v+h_v)*2*90;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="5 мм")
			{
				rezka = (w_v+h_v)*2*110;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="6 мм")
			{
				rezka = (w_v+h_v)*2*130;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="8 мм")
			{
				rezka = (w_v+h_v)*2*150;	
			}
		if($("#material_orgsteklo").prop("checked") && $("#tolshina").val()=="10 мм")
			{
				rezka = (w_v+h_v)*2*170;	
			}
	}
	
	
	function faska_orgstekla(){
		faska = 0;	
		if($("#material_orgsteklo").prop("checked") && $("#obrabotka_faska").prop("checked"))
			{
				faska = (w_v+h_v)*2*150;	
			}
	}
	
	function zakalka_stekla(){
		zakalka = 1;	
		if($("#material_steklo").prop("checked") && $("#obrabotka_zakalka").prop("checked"))
			{
				if($("#steklo_prozrachnoe").prop("checked") || $("#steklo_matovoe").prop("checked") || $("#steklo_tonirovannoe_bronza").prop("checked") || $("#steklo_matovoe_bronza").prop("checked")) 
				{
					zakalka = 3.5;
				}
			}
	}
	
	function kriv_obrabotka(){
		kriv_obr = 0;	
		if($("#material_steklo").prop("checked") && $("#obrabotka_krivolineinaya").prop("checked"))
			{
				if($("#forma_krkazyabra").prop("checked") || $("#forma_krug").prop("checked") || $("#forma_oval").prop("checked"))
					{
						if($("#tolshina").val()=="2 мм" || $("#tolshina").val()=="3 мм" || $("#tolshina").val()=="4 мм")
						{
							kriv_obr = (w_v+h_v)*2*250;
						}
						if($("#tolshina").val()=="5 мм")
						{
							kriv_obr = (w_v+h_v)*2*350;
						}
						if($("#tolshina").val()=="6 мм")
						{
							kriv_obr = (w_v+h_v)*2*350;
						}
						if($("#tolshina").val()=="8 мм")
						{
							kriv_obr = (w_v+h_v)*2*400;
						}
						if($("#tolshina").val()=="10 мм")
						{
							kriv_obr = (w_v+h_v)*2*450;
						}
					}
			}
		if($("#material_zerkalo").prop("checked") && $("#obrabotka_krivolineinaya").prop("checked"))
			{
				if($("#forma_krkazyabra").prop("checked") || $("#forma_krug").prop("checked") || $("#forma_oval").prop("checked"))
					{
						kriv_obr = (w_v+h_v)*2*350;
					}
			}
		
	}
	
	function evrokromka(){
		k_e = 0;	
		if($("#material_steklo").prop("checked") && $("#obrabotka_evrokromka").prop("checked"))
			{
				if($("#forma_pryamougolnik").prop("checked"))
					{
						if($("#tolshina").val()=="2 мм" || $("#tolshina").val()=="3 мм" || $("#tolshina").val()=="4 мм")
						{
							k_e = (w_v+h_v)*2*100;
						}
						if($("#tolshina").val()=="5 мм")
						{
							k_e = (w_v+h_v)*2*150;
						}
						if($("#tolshina").val()=="6 мм")
						{
							k_e = (w_v+h_v)*2*200;
						}
						if($("#tolshina").val()=="8 мм")
						{
							k_e = (w_v+h_v)*2*250;
						}
						if($("#tolshina").val()=="10 мм")
						{
							k_e = (w_v+h_v)*2*300;
						}
					}
			}
		if($("#material_zerkalo").prop("checked") && $("#obrabotka_evrokromka").prop("checked"))
			{
				if($("#forma_pryamougolnik").prop("checked"))
					{
						k_e = (w_v+h_v)*2*150;
					}		
				if(((w_v*h_v) >= 2.2) && ((w_v*h_v) < 2.5) && (k_e != 0))
					{
						k_e = k_e + 1650;
					} 
				if(((w_v*h_v) >= 2.5) && ((w_v*h_v) < 3) && (k_e != 0))
					{
						k_e = k_e + 2900;
					}
				if(((w_v*h_v) >= 3) && ((w_v*h_v) < 3.5) && (k_e != 0))
					{
						k_e = k_e + 3700;
					}
			}
		
	}
	
	function tolshina_fatceta(){
		
		t_f = 0;
		
		if($("#obrabotka_facet").prop("checked"))
		{
			if($("#tolshina_faceta").val()=="10 мм")
			{ t_f = (w_v+h_v)*2*360; }
			if($("#tolshina_faceta").val()=="15 мм")
			{ t_f = (w_v+h_v)*2*540; }
			if($("#tolshina_faceta").val()=="20 мм")
			{ t_f = (w_v+h_v)*2*720; }
			if($("#tolshina_faceta").val()=="25 мм")
			{ t_f = (w_v+h_v)*2*900; }
			if($("#tolshina_faceta").val()=="30 мм")
			{ t_f = (w_v+h_v)*2*1080; }
		}
			
	}
	
	function kolichestvo(){
	
		k_vo = $("#kolvo").val();
		
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==1)
		{ k_vo = 1; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==2)
		{ k_vo = k_vo*0.9; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==3)
		{ k_vo = k_vo*0.88; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==4)
		{ k_vo = k_vo*0.85; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==5)
		{ k_vo = k_vo*0.8; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==6)
		{ k_vo = k_vo*0.77; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==7)
		{ k_vo = k_vo*0.75; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==8)
		{ k_vo = k_vo*0.72; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()==9)
		{ k_vo = k_vo*0.7; }
		if($("#material_steklo").prop("checked") && $("#kolvo").val()>=10)
		{ k_vo = k_vo*0.68; }
		
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==1)
		{ k_vo = 1; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==2)
		{ k_vo = k_vo*0.9; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==3)
		{ k_vo = k_vo*0.88; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==4)
		{ k_vo = k_vo*0.85; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==5)
		{ k_vo = k_vo*0.8; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==6)
		{ k_vo = k_vo*0.77; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==7)
		{ k_vo = k_vo*0.75; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==8)
		{ k_vo = k_vo*0.72; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()==9)
		{ k_vo = k_vo*0.7; }
		if($("#material_zerkalo").prop("checked") && $("#kolvo").val()>=10)
		{ k_vo = k_vo*0.68; }
		
		if($("#material_orgsteklo").prop("checked") && $("#kolvo").val()==1)
		{ k_vo = 1; }
		if($("#material_orgsteklo").prop("checked") && $("#kolvo").val()==2)
		{ k_vo = k_vo*0.9; }
		if($("#material_orgsteklo").prop("checked") && $("#kolvo").val()==3)
		{ k_vo = k_vo*0.85; }
		if($("#material_orgsteklo").prop("checked") && $("#kolvo").val()==4)
		{ k_vo = k_vo*0.8; }
		if($("#material_orgsteklo").prop("checked") && $("#kolvo").val()==5)
		{ k_vo = k_vo*0.75; }
		if($("#material_orgsteklo").prop("checked") && $("#kolvo").val()>=6)
		{ k_vo = k_vo*0.7; }
	}
	
	function zash_plenka(){
		z_pl = 0;	
		if($("#material_zerkalo").prop("checked") && $("#zashit_plenka").prop("checked"))
			{
				z_pl = w_v*h_v*350*k_vo;	
			}
	}
	
	function dostav(){
	
		dost = 0;	
		
		if($("#dostavka").prop("checked"))
		{
		/*	if(($("#vysota").val()>1000) || ($("#shirina").val()>1000))
				{
					dost = 1700;
				}
			if(($("#shirina").val()<=1000) && ($("#vysota").val()<=1000)) 
				{
					dost = 800;
				}   */
			if((w_v*h_v)>1)
				{
					dost = 1700;
				}
			if((w_v*h_v)<=1)
				{
					dost = 800;
				} 
		
		}
	}
	
	
		
	function ks(){ 
		if((($("#shirina").val()/1000)*($("#vysota").val()/1000))<0.1)
		{ 
			k_s = 3;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.1) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.2))
		{ 
			k_s = 2;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.2) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.3))
		{ 
			k_s = 1.85;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.3) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.4))
		{ 
			k_s = 1.6;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.4) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.5))
		{ 
			k_s = 1.5;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.5) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.6))
		{ 
			k_s = 1.4;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.6) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.7))
		{ 
			k_s = 1.3;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.7) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.8))
		{ 
			k_s = 1.2;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.8) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<0.9))
		{ 
			k_s = 1.1;
		}
		if((($("#shirina").val()/1000*$("#vysota").val()/1000)>=0.9) && (($("#shirina").val()/1000*$("#vysota").val()/1000)<1))
		{ 
			k_s = 1.05;
		}
		if((($("#shirina").val()/1000)*($("#vysota").val()/1000))>=1)
		{ 
			k_s = 1;
		}
		
		if($("#forma_krug").prop("checked"))
			{
				if((($("#shirina").val()/1000)*($("#shirina").val()/1000))<0.1)
				{ 
					k_s = 3;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.1) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.2))
				{ 
					k_s = 2;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.2) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.3))
				{ 
					k_s = 1.85;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.3) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.4))
				{ 
					k_s = 1.6;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.4) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.5))
				{ 
					k_s = 1.5;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.5) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.6))
				{ 
					k_s = 1.4;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.6) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.7))
				{ 
					k_s = 1.3;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.7) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.8))
				{ 
					k_s = 1.2;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.8) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<0.9))
				{ 
					k_s = 1.1;
				}
				if((($("#shirina").val()/1000*$("#shirina").val()/1000)>=0.9) && (($("#shirina").val()/1000*$("#shirina").val()/1000)<1))
				{ 
					k_s = 1.05;
				}
				if((($("#shirina").val()/1000)*($("#shirina").val()/1000))>=1)
				{ 
					k_s = 1;
				}
			}
	} 
	
	
		
	$("#material_steklo").change(function()
        {
			$("#blok_steklo").css("display","inline-block");
			$("#blok_orgsteklo").css("display","none");
			$("#blok_zerkalo").css("display","none");
			$("#blok_obrabotka_faska").css("display","none");
			$("#blok_obrabotka_zakalka").css("display","block");
			$("#blok_obrabotka_evrokromka").css("display","block");
			$("#blok_zashit_plenka").css("display","none");
			ochistka();
			$("#material_steklo").attr('checked', true);
			$("#blok_steklo").removeClass("disabled-blok");
			forma_materiala();
            cena();
			$("#cena").css("max-width","65px");
        }
    );
	$("#material_zerkalo").change(function()
        {
			$("#blok_steklo").css("display","none");
			$("#blok_orgsteklo").css("display","none");
			$("#blok_zerkalo").css("display","inline-block");
			$("#blok_obrabotka_faska").css("display","none");
			$("#blok_obrabotka_zakalka").css("display","none");
			$("#blok_obrabotka_evrokromka").css("display","block");
			$("#blok_zashit_plenka").css("display","block");
			ochistka();
			$("#material_zerkalo").attr('checked', true);
			$("#blok_zerkalo").removeClass("disabled-blok");
			forma_materiala();
            cena();
			$("#cena").css("max-width","65px");
        }
    );
	$("#material_orgsteklo").change(function()
        {
			$("#blok_steklo").css("display","none");
			$("#blok_orgsteklo").css("display","inline-block");
			$("#blok_zerkalo").css("display","none");
			$("#blok_obrabotka_faska").css("display","block");
			$("#blok_obrabotka_zakalka").css("display","none");
			$("#blok_obrabotka_krivolineinaya").css("display","none");
			$("#blok_obrabotka_evrokromka").css("display","none");
			$("#blok_zashit_plenka").css("display","none");
			ochistka();
			$("#material_orgsteklo").attr('checked', true);
			$("#blok_orgsteklo").removeClass("disabled-blok");
			forma_materiala();
            cena();
			$("#cena").css("max-width","65px");
        }
    );
	
	$("#vid_stekla").change(function()
		{
			if($('input[name=vid_stekla]:checked').length > 0)
			{
				$("#blok_tolshina").removeClass("disabled-blok");
			}
			cena();
		}
	);	
	$("#steklo_prozrachnoe").change(function()
        {
			if($("#steklo_prozrachnoe").prop("checked"))
			{
				$("#tolshina").val("2 мм");
			
				$("#tolshina2mm").css("display","block");
				$("#tolshina3mm").css("display","block");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","block");
				$("#tolshina6mm").css("display","block");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","block");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="4 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				}
				
			}						
            cena();
        }
    );
	$("#steklo_matovoe").change(function()
        {
			if($("#steklo_matovoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","block");
				$("#tolshina6mm").css("display","block");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","block");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}			
            cena();
        }
    );
	$("#steklo_tonirovannoe_bronza").change(function()
        {
			if($("#steklo_tonirovannoe_bronza").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","block");
				$("#tolshina6mm").css("display","block");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
            cena();
        }
    );
	$("#steklo_matovoe_bronza").change(function()
        {
			if($("#steklo_matovoe_bronza").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
            cena();
        }
    );
	$("#steklo_grafit").change(function()
        {
			if($("#steklo_grafit").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"], #tolshina option[value="8 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
            cena();
        }
    );
	$("#steklo_uzorchatoe").change(function()
        {
			if($("#steklo_uzorchatoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);				
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
            cena();
        }
    );
	$("#steklo_krashenoe").change(function()
        {
			if($("#steklo_krashenoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
            cena();
        }
    );
	$("#steklo_osvetlennoe").change(function()
        {
			if($("#steklo_osvetlennoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","block");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","block");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
				
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
            cena();
        }
    );
	
	
	/******* Изменение зеркал *******/
	$("#zerkalo_obychnoe").change(function()
        {
			if($("#zerkalo_obychnoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#zerkalo_vlaga").change(function()
        {
			if($("#zerkalo_vlaga").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#zerkalo_bronza").change(function()
        {
			if($("#zerkalo_bronza").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#zerkalo_grafit").change(function()
        {
			if($("#zerkalo_grafit").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#zerkalo_dekorativnoe").change(function()
        {
			if($("#zerkalo_dekorativnoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#zerkalo_matovoe").change(function()
        {
			if($("#zerkalo_matovoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#zerkalo_akrilovoe").change(function()
        {
			if($("#zerkalo_akrilovoe").prop("checked"))
			{
				$("#tolshina").val("4 мм");
			
				$("#tolshina2mm").css("display","none");
				$("#tolshina3mm").css("display","none");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","none");
				$("#tolshina6mm").css("display","none");  
				$("#tolshina8mm").css("display","none");
				$("#tolshina10mm").css("display","none");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',true);
				$('#tolshina option[value="4 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	
	
	
	$("#orgsteklo_prozrachnoe").change(function()
        {
			if($("#orgsteklo_prozrachnoe").prop("checked"))
			{
				$("#tolshina").val("2 мм");
			
				$("#tolshina2mm").css("display","block");
				$("#tolshina3mm").css("display","block");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","block");
				$("#tolshina6mm").css("display","block");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","block");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="4 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	$("#orgsteklo_beloe").change(function()
        {
			if($("#orgsteklo_beloe").prop("checked"))
			{
				$("#tolshina").val("2 мм");
			
				$("#tolshina2mm").css("display","block");
				$("#tolshina3mm").css("display","block");
				$("#tolshina4mm").css("display","block");
				$("#tolshina5mm").css("display","block");
				$("#tolshina6mm").css("display","block");
				$("#tolshina8mm").css("display","block");
				$("#tolshina10mm").css("display","block");
				
				$('#tolshina option[value="2 мм"], #tolshina option[value="3 мм"], #tolshina option[value="4 мм"], #tolshina option[value="5 мм"], #tolshina option[value="6 мм"], #tolshina option[value="8 мм"], #tolshina option[value="10 мм"]').prop('disabled',false);
				
				$("#shirina").val("");
				$("#vysota").val("");
			}
            cena();
        }
    );
	
	
	$("#forma_pryamougolnik").change(function()
        {
			if($("#forma_pryamougolnik").prop("checked"))
			{
				forma = 1;
			}
			if($("#forma_pryamougolnik").prop("checked") && ($("#material_steklo").prop("checked") || $("#material_zerkalo").prop("checked")))
			{
				$("#blok_obrabotka_evrokromka_facet").css("display","block");
				$("#blok_obrabotka_krivolineinaya").css("display","none");
			}
			
            cena();
        }
    );
	$("#forma_krkazyabra").change(function()
        {
			if($("#forma_krkazyabra").prop("checked"))
			{
				forma = 1.4;
			}
			if($("#forma_krkazyabra").prop("checked") && ($("#material_steklo").prop("checked") || $("#material_zerkalo").prop("checked")))
			{
				$("#blok_obrabotka_evrokromka_facet").css("display","none");
				$("#blok_obrabotka_krivolineinaya").css("display","block");
			}
			
            cena();
        }
    );
	$("#forma_krug").change(function()
        {
			if($("#forma_krug").prop("checked"))
			{
				forma = 1.2;
				$("#vysota").val("");
				$("#vvod_vysota").css("display","none");
				$("#vysota").attr('disabled', true);
				gabarity_shirina();				
			}
			if($("#forma_krug").prop("checked") && ($("#material_steklo").prop("checked") || $("#material_zerkalo").prop("checked")))
			{
				$("#blok_obrabotka_evrokromka_facet").css("display","none");
				$("#blok_obrabotka_krivolineinaya").css("display","block");
			}
			
			$("#shirina").val("");
			$("#vysota").val("");
			
            cena();
        }
    );
	$("#forma_oval").change(function()
        {
			if($("#forma_oval").prop("checked"))
			{
				forma = 1.25;
			}
			if($("#forma_oval").prop("checked") && ($("#material_steklo").prop("checked") || $("#material_zerkalo").prop("checked")))
			{
				$("#blok_obrabotka_evrokromka_facet").css("display","none");
				$("#blok_obrabotka_krivolineinaya").css("display","block");
			}
			
            cena();
        }
    );
	
	
	
	$("#vysota").keyup(function()
        {
		
		gabarity_vysota();
		
		if(($("#vysota").val()<250) || ($("#shirina").val()<250) || ($("#material_zerkalo").prop("checked")) || ($("#material_orgsteklo").prop("checked")))
			{
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
		if((($("#steklo_prozrachnoe").prop("checked")) || ($("#steklo_matovoe").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked"))) && ($("#vysota").val()>=250) && ($("#shirina").val()>=250))
			{
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);
				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
		cena();
        }
    );
	$("#shirina").keyup(function()
        {		
		
		gabarity_shirina();
		
		if($("#forma_krug").prop("checked"))
			{
				h_v = ($("#shirina").val()/1000);
			}
		if(($("#shirina").val()<250) || ($("#vysota").val()<250) || ($("#material_zerkalo").prop("checked")) || ($("#material_orgsteklo").prop("checked")))
			{
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
		if((($("#steklo_prozrachnoe").prop("checked")) || ($("#steklo_matovoe").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked"))) && ($("#shirina").val()>=250) && ($("#vysota").val()>=250))
			{
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);
				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
		if((($("#steklo_prozrachnoe").prop("checked")) || ($("#steklo_matovoe").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked"))) && ($("#forma_krug").prop("checked")) && ($("#shirina").val()>=250))
			{
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);
				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
		cena();
        }
    );
	
	$("#obrabotka_faska").change(function()
        {
            cena();
        }
    );
	$("#obrabotka_krivolineinaya").change(function()
        {
            cena();
        }
    );
	$("#obrabotka_net").change(function()
        {
			if($("#obrabotka_net").prop("checked"))
			{
				$("#tolshina_faceta").css("display","none");
				$("#tolshina_faceta").attr('disabled', true);
			}
			
			if(($("#shirina").val()<250) || ($("#vysota").val()<250) || ($("#material_zerkalo").prop("checked")) || ($("#material_orgsteklo").prop("checked")))
			{
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
			if((($("#steklo_prozrachnoe").prop("checked")) || ($("#steklo_matovoe").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked"))) && ($("#shirina").val()>=250) && ($("#vysota").val()>=250))
			{
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);
				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
			
            cena();
        }
    );
	$("#obrabotka_evrokromka").change(function()
        {
			if($("#obrabotka_evrokromka").prop("checked"))
			{
				$("#tolshina_faceta").css("display","none");
				$("#tolshina_faceta").attr('disabled', true);
			}
			
			if(($("#shirina").val()<250) || ($("#vysota").val()<250) || ($("#material_zerkalo").prop("checked")) || ($("#material_orgsteklo").prop("checked")))
			{
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
			if((($("#steklo_prozrachnoe").prop("checked")) || ($("#steklo_matovoe").prop("checked")) || ($("#steklo_tonirovannoe_bronza").prop("checked")) || ($("#steklo_matovoe_bronza").prop("checked"))) && ($("#shirina").val()>=250) && ($("#vysota").val()>=250))
			{
				$("#blok_obrabotka_zakalka").css("display","block");
				$("#obrabotka_zakalka").attr('disabled', false);
				
				if($("#obrabotka_zakalka").prop("checked"))
				{
					$("#obrabotka_zakalka").attr('checked', true);
				}
				if($("#obrabotka_zakalka").prop("checked")==false)
				{
					$("#obrabotka_zakalka").attr('checked', false);
				} 
			}
			
            cena();
        }
    );
	$("#obrabotka_facet").change(function()
        {
			if($("#obrabotka_facet").prop("checked"))
			{
				$("#tolshina_faceta").css("display","block");
				$("#tolshina_faceta").attr('disabled', false);
				
				$("#blok_obrabotka_zakalka").css("display","none");
				$("#obrabotka_zakalka").attr('checked', false);
				$("#obrabotka_zakalka").attr('disabled', true);
			}
            cena();
        }
    );
	$("#tolshina_faceta").change(function() 
        {
			cena();
        }
    );
	$("#obrabotka_zakalka").change(function()
        {
            cena();
        }
    );
	
	
	$("#kolvo").keyup(function()
        {
			if($("#dostavka").prop("checked") && $("#kolvo").val()<=0)
			{
				$("#cena").val(0);
			}
			else 
			{
				cena();
			}
        }
    );
	
	$("#dostavka").change(function()
        {
			if($("#dostavka").prop("checked") && $("#kolvo").val()<=0)
			{
				$("#kolvo").val(0);
			}
			else 
			{
				cena();
			}
            
        }
    );
	
	$("#zashit_plenka").change(function()
        {

			cena();
    
        }
    );
	
	
	
	

	
	
	$("#tolshina").change(function() 
        {
			cena();
        }
    );	

	
	
	
	
	
	function cena(){
	
		dzbled();
	
		shirina();
		vysota();
		
		ks();
		tolshina_materiala();
		forma_materiala();
		rezka_materiala();
		faska_orgstekla();
		zakalka_stekla();
		kriv_obrabotka();
		evrokromka();
		tolshina_fatceta();
		kolichestvo();
		zash_plenka();
		dostav();
		
		
		if((w_v==null) || (h_v==null)) 
			{
				$("#cena").val("");
			}
		else if($("#material_steklo").prop("checked")==true) 
		{
		    if($("#steklo_prozrachnoe").prop("checked")==true) 
			{
			    if(tolshina=="2 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1200*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="3 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1300*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1300*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="5 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1900*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="6 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2400*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3750*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="10 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4400*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
		    else if($("#steklo_matovoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1400*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.5+dost));
				}
				if(tolshina=="5 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1880*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.5+dost));
				}
				if(tolshina=="6 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2400*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.5+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3200*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.5+dost));
				}
				if(tolshina=="10 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3500*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.5+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#steklo_tonirovannoe_bronza").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2050*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="5 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1950*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="6 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2350*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3450*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#steklo_matovoe_bronza").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2800*forma+rezka+t_f+kriv_obr+k_e)*zakalka*k_vo*1.76+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#steklo_grafit").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2100*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3500*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#steklo_uzorchatoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4150*forma+rezka+kriv_obr+k_e)*k_vo*1.76+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#steklo_krashenoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4200*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#steklo_osvetlennoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3200*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if(tolshina=="6 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4400*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*5300*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if(tolshina=="10 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*6200*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
		}
		else if($("#material_zerkalo").prop("checked")==true) 
		{
		    
			if($("#zerkalo_obychnoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1650*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			if($("#zerkalo_vlaga").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*1800*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#zerkalo_bronza").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2500*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#zerkalo_grafit").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*2500*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#zerkalo_dekorativnoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3500*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#zerkalo_matovoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4500*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
			else if($("#zerkalo_akrilovoe").prop("checked")==true) 
			{
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*8000*forma+rezka+t_f+kriv_obr+k_e)*k_vo*1.32+z_pl*1.32+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
	
		}
		else if($("#material_orgsteklo").prop("checked")==true) 
		{
		    if($("#orgsteklo_prozrachnoe").prop("checked")==true) 
			{
			    if(tolshina=="2 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3100*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="3 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3500*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4500*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="5 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*6600*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="6 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*7800*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*9300*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="10 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*10700*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
		    else if($("#orgsteklo_beloe").prop("checked")==true) 
			{
				if(tolshina=="2 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3500*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="3 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*3500*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="4 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*4400*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="5 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*7200*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="6 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*8500*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="8 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*10200*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if(tolshina=="10 мм")
				{
				  $("#cena").val(Math.round((w_v*h_v*k_s*11700*forma+rezka+faska)*k_vo*1.21+dost));
				}
				if((w_v*h_v)<=0) {$("#cena").val("-");}
				if($("#cena").val()<600) {$("#cena").val(600);}
			}
		}
		
		razmer_pole_cena();
		
			
	}
	
	$("#calc_form").validate({
        rules:{

            calc_telefon:{  
                required: true
            } 
			
		/*	calc_firstname:{ 
                required: true,
                minlength: 2
            },

            

			calc_pochta:{
                required: true,
                email: true
            } */
        },

        messages:{
		
			calc_telefon:{
                required: "Обязательное поле - Телефон"
            }

        
		/*	calc_firstname:{
                required: "Обязательное поле - Имя",
                minlength: "Имя должно быть не менее 2 символов"
            }

            

			calc_pochta:{
                required: "",
                email: "Неправильно указан E-mail адрес"
            } */
        },
		
		errorPlacement: function(error, element) {
         error.insertAfter("#calc_dop_info");
		 },
		 
		highlight:function (element, errorClass, validClass) 
		{
		$(element).addClass(errorClass).removeClass(validClass); 
		},
			
		unhighlight:function (element, errorClass, validClass) {
		$(element).removeClass(errorClass).addClass(validClass);
       
		},
			
		submitHandler: function(form) {
			document.getElementById('calc_enter').disabled = true;
		//	var file = document.getElementById('maket_file').files[0];
			var data = new FormData(form);
        //  data.append('file', file); 
			$.ajax({
			type: "post",
			contentType: false,       
            cache: false,             
            processData:false,
			url: "https://steklait.ru/sergo/sendsergo.php",
			data: data,
			success: function(result){
			$("#calc_finalresult").text(result);
			$("#calc_enter").fadeIn();	
			},
			complete: function(result){
			setTimeout( function() { $("#calc_finalresult").empty(); }, 8000);
			},
			error: function(a, b, c) {
				console.log(a, b, c);
			}
			});
		/*	$('#calc_form').trigger( 'reset' ); */
		ochistka();
		dzbled();
		$("#calc_enter").delay(100).fadeOut();	
		
		document.getElementById('calc_enter').disabled = false;
		
		return false;
		
        }				
    });
	
	
	$(".nosend").keypress(function(e){
            if(e.which == 13){
                    return false;
            }
    });
	
	
	
});

