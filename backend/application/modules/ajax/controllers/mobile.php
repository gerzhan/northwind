<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Mobile extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('customers_model', 'cust');
	}

	/**
	 * This page gives the list of customers available
	 * Limit set to 10 which can be changed.
	 */
	public function index() {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
		$data = $this->cust->get_customers();
		echo json_encode($data);
	}

	/**
	 * This page is taking the post data and saving the entry to the database.
	 */
	public function save_customer_profile() {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
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

		$this->db->insert('customers', $data);

		$this->index();
	}

	public function get_categories() {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
		$this->load->model('prod_cat_model', 'prod_cat');
		$data = $this->prod_cat->get_categories();
		echo json_encode($data);
	}

	public function product_by_id($category_id = null) {
		if ($category_id != null) {
			header('Access-Control-Allow-Origin: *');
			header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
			$this->load->model('prod_cat_model', 'prod_cat');
			$data = $this->prod_cat->get_products_by_category($category_id);
			echo json_encode($data);
		}
		else {
			show_error('Identifier required.', 500);
		}
	}
}