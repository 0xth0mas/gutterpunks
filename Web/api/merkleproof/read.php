<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// SAMPLE MERKLE PROOFS TO RETURN  
$proofs = ['0x3dd6dd084b3cf81f6f6a07a2cce56992f7b01e06' => [20, 1000000000000000000, '[0xa3c931bfc704bfd48dbba6dccd81fab7c600044765b8689497446464a4700c1c,0x850c66c10ebcdd4f04fde2d392eedfc278f9b3485891f075f7348018b242eb83,0xf90f477e9ee5f508ceea4e3e8c14a51367b04552caf36a76ecd51df4bdbbda25,0x47320366487ad637f5515191a95a73719c5d97f4659367c999befbb67c6dd6d9,0xb9b6fffb7d6b3235bef6024eba3c2d49c4369d32fb863d01cc75b03fcb847f77,0x77cc9e7bee1d1d92a02d76c517f5411ec6d1ad7e46d54da909cdab1a459ce8f1,0xa43b36c37cf5140e0e62196673b7ac7dbe1bd3c5e3ccc31528526ca57e0d9261,0x956a65a4bd5c9c4170a1584c47d9c95ac5b4f983b00a248804ba4990aa443690]'], 
'0xcefa22191e49d3d501c57c9a831d01a09f7c1112' => [10, 500000000000000000, '[0xfc5cf5455df79d922ad65e37b9c8860579c65dc1bad5e9080e105fa34f247931,0x80878647a85137e5b7ca19357d9560649c7d7b3e35ad6b5a98403266df4c822f,0x0c56eb1edc63d79347b193a37fed3afcf9c601f1b5d51979436d2b21150bfea0,0x5eadadd4994a939292bae431e11ba0643fd5124206efb7b7d0cd3c9ebe86405c,0x928eabe9210dc0b57511d82b2901f45678e3da10c0d90de0803f90e5aebaf952,0x956a65a4bd5c9c4170a1584c47d9c95ac5b4f983b00a248804ba4990aa443690]'], 
'0xf9557ef7afb1a5b75c010a5303ec884443978bf2' => [9, 450000000000000000, '[0x56f5fc1ef02f4666acbf12805f899ed9652040b1093bfdc01e8c0b95fc51e1fb,0xbd0c3c2903fd877bf2ffea9076a36b83a2f367b9f791d417c074e3a790230d29,0x53ea8733301f8d6bd1fc38ed96728946b160d8745dbbfff09e2881f2d63a9b9d,0xdbffba9814431bb630f3af89f2d9f7e665f41bad0a424184b0b9f06d474c3aee,0x80fae6447f9ad9df731597c684d46545f7abb771bdcf0fe6d623e99672ece16e,0xa4a0eb92afa4c5b5a496cec48fe42e042746371b4ac16c6ba1601d40d6a72783,0x53ff76ddc9fc5355909c3b87fcd0c305aecb92026eb00ca0150aa546a1acc4fb,0xfa29bf565e2d0ff1df4d5f94336a8a5f881a7c343f72c5598660aab22e5ed9fb]'], 
'0xa860381e6dddb6052e11666b57ab88430d77026f' => [8, 400000000000000000, '[0x5b3e1c12c63e70389f41777a6d2df5163932f550c247e9f34e37519b2b515bbe,0xce3f3e8b222451833f28adff24983b44b452795b52e0d536d70a0d11a34eee65,0x1c6f4f5269e27a5eb8b0f4cf086f6906222e7239c6d302efe9577d5029de1455,0xdbffba9814431bb630f3af89f2d9f7e665f41bad0a424184b0b9f06d474c3aee,0x80fae6447f9ad9df731597c684d46545f7abb771bdcf0fe6d623e99672ece16e,0xa4a0eb92afa4c5b5a496cec48fe42e042746371b4ac16c6ba1601d40d6a72783,0x53ff76ddc9fc5355909c3b87fcd0c305aecb92026eb00ca0150aa546a1acc4fb,0xfa29bf565e2d0ff1df4d5f94336a8a5f881a7c343f72c5598660aab22e5ed9fb]'], 
'0x4557ebc539137eec5ce6b76d80aeccad6af0aab7' => [7, 350000000000000000, '[0x5daab78c47b61d447e5bfd8a7be7573bac983ac1a75c209e995a256969bc19d1,0x1a07e52e2f23cad55fd89ea4fdf531e51a8c19999ad09a71a367ae765c956aa1,0xce238e30eb482f229a590f8b8d1bdb7bc77776fce7e4210a13ba4fc1fb7ae5ea,0x17a1a5f978bdd2dc075ee544fb0aefaa34c416bc18331c313de015d64ac4b1d0,0x80fae6447f9ad9df731597c684d46545f7abb771bdcf0fe6d623e99672ece16e,0xa4a0eb92afa4c5b5a496cec48fe42e042746371b4ac16c6ba1601d40d6a72783,0x53ff76ddc9fc5355909c3b87fcd0c305aecb92026eb00ca0150aa546a1acc4fb,0xfa29bf565e2d0ff1df4d5f94336a8a5f881a7c343f72c5598660aab22e5ed9fb]'], 
'0xef3fea2ab12c822dc3437be195a1bffc67f2ad08' => [6, 300000000000000000, '[0x5fd218db2e171193891d46c08a77e722195921cc7a3b56a8328b70354b74c7c1,0x2ae2a973ba927a3b7604e676941cf9da0afcea91c6aeda9d63ffa5eb0d544768,0xce238e30eb482f229a590f8b8d1bdb7bc77776fce7e4210a13ba4fc1fb7ae5ea,0x17a1a5f978bdd2dc075ee544fb0aefaa34c416bc18331c313de015d64ac4b1d0,0x80fae6447f9ad9df731597c684d46545f7abb771bdcf0fe6d623e99672ece16e,0xa4a0eb92afa4c5b5a496cec48fe42e042746371b4ac16c6ba1601d40d6a72783,0x53ff76ddc9fc5355909c3b87fcd0c305aecb92026eb00ca0150aa546a1acc4fb,0xfa29bf565e2d0ff1df4d5f94336a8a5f881a7c343f72c5598660aab22e5ed9fb]'], 
'0x9c88fdfbb5a007b6df4925da7a7ba3e555c7d775' => [6, 300000000000000000, '[0xc92968c30010608011ba7bd6fbc09a6e334cfb355c791f652d3891b5b2180ea3,0x953829f63210fbe7abde85b7bab28900c462708615ed2122ee53f6769d39f16c,0xd403b49ee4a5c069b97adf9a0c1e0377a7b1494632353eeb3a6b83ae6857cb4f,0xf7e8607dbc202750c3f8f141021cb875e045a8bc4fb817a084403b6913742f30,0xd5782a9c402f836f6266a576be807ecd700645f0d02e18c8ee034da4c6673d94,0xef11e8598bcc41dbba3954484c386235b6e6035e47f7262cae14d2ce9ac23cc4,0xa43b36c37cf5140e0e62196673b7ac7dbe1bd3c5e3ccc31528526ca57e0d9261,0x956a65a4bd5c9c4170a1584c47d9c95ac5b4f983b00a248804ba4990aa443690]'], 
'0x67a9d069abdce3b402aa724f9182de2ca969fed9' => [1, 50000000000000000, '[0x2e6a1c99ebf9fd7030468e55ac8fab7813576f41d591c26928df1f3a6c006c82,0xe44036e2b214fc16c85a6fd7e5b75d5bbb873a2bdceb38ce414ca96402e7e020,0x854527734028bf6fb3029f3c473d9fec0eb80071e7686c178ed2189320899ed9,0x880527409627d93dbabe7bca6e8d8ee07fcb9a5612618d2a39daf6ca07b42d60,0xb7451426118761d6e0d1cf9218e66e502739112c26faab6391d38a7a31500833,0x285ce5054902573a4382a79987a8ef2ebea05bb51327f02930a3fff0c7a67f42,0x0ea42feef517574e48021cbb884c25a3e91a44e19d838089ff0e13068bd9e433,0xfa29bf565e2d0ff1df4d5f94336a8a5f881a7c343f72c5598660aab22e5ed9fb]']];  
  
  
if(array_key_exists("param", $_GET)) {
	$walletaddress = $_GET["param"];
	if(array_key_exists($walletaddress, $proofs)) {
		// set response code - 200 OK
		http_response_code(200);
		$proof = '{"max_mint":"' . $proofs[$walletaddress][0] . '", "voucher_amount":"' . $proofs[$walletaddress][1] . '", "merkle_proof":"' . $proofs[$walletaddress][2] . '"}';
		echo $proof;
	} else {
		// set response code - 404 Not found
		http_response_code(404);
	  
		// tell the user no assets found
		echo json_encode(
			array("message" => "Proof not found.")
		);
	}
}
  
// no subcollection found will be here
else{
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no assets found
    echo json_encode(
        array("message" => "No wallet specified.")
    );
}
?>