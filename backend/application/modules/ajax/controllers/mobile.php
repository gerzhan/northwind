<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Mobile extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('customers_model', 'cust');
	}
	
	public function index() {
		$data = $this->cust->get_customers();
		echo json_encode($data);
	}
}