/*
**  ErrorPower's ModPE
**/

const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

const string_color = 
{
    black : "§0" , 
    blue : "§1" , 
    green_grass : "§2" , 
    blue_light : "§3" , 
    red : "§4" , 
    purple : "§5" , 
    orange : "§6" , 
    pale : "§7" , 
    gray : "§8" , 
    blue_technology : "§9" , 
    green : "§a" , 
    green_blue : "§b" , 
    red_light : "§c" , 
    pink : "§d" , 
    yellow : "§e" , 
    white : "§f"
};

print = function( text )
{
    ctx.runOnUiThread
    (
        new java.lang.Runnable
        (
            {
                run : function()
                {
                    android.widget.Toast.makeText( ctx , text , 0.5 ).show();
                }
            }
        )
    );
};

ErrorPower = 
{
    evalScript : function( file_name )
    {
        eval( new java.lang.String( ModPE["getBytesFromTexturePack"]( "scripts/" + file_name ) , "UTF-8" ) + "" );
    } , 
    print : print
};

ErrorPower.evalScript( "main.js" );
