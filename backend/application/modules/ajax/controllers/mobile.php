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

	public function save_customer_profile() {
		$post_data = $this->input->post('data');
		$post_data = json_decode($post_data);
		$data = array(
			'CustomerID' => time(),
			'ContactName' => $post_data->ContactName,
			'CompanyName' => $post_data->CompanyName,
			'ContactTitle' => $post_data->ContactTitle,
			'Address' => $post_data->Address,
			'City' => $post_data->City,
			'Region' => $post_data->Region,
			'PostalCode' => $post_data->PostalCode,
			'Country' => $post_data->Country,
			'Phone' => $post_data->Phone,
			'Fax' => $post_data->Fax,
		);
//		echo json_encode($this->input->post('data'));exit();
		$this->db->insert('customers', $data);

		$this->index();
	}
}