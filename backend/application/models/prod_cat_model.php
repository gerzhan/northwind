<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Prod_cat_model extends CI_Model {
	public $category_table = 'categories c';
	public $product_table = 'products p';

	public function __construct() {
		parent::__construct();
	}

	public function get_categories() {
		$this->db->select();
		$this->db->from($this->category_table);
		$this->db->order_by('CategoryName');
		$query = $this->db->get();

		$result = $query->result_array();
		if ($query->num_rows() > 0) {
			return $result;
		}
	}

	public function get_products_by_category($category_id = null) {
		$this->db->select();
		$this->db->from($this->product_table);

		if ($category_id != null) {
			$this->db->where('p.CategoryID', $category_id);
		}

		$this->db->order_by('p.ProductName', 'ASC');
		$query = $this->db->get();
		if ($query->num_rows() > 0) {
			return $query->result_array();
		}
	}
}