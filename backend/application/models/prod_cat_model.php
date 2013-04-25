<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Prod_cat_model extends CI_Model {
	public $table_name = 'categories';

	public function __construct() {
		parent::__construct();
	}

	public function get_categories() {
		$query = $this->db->select()->from($this->table_name)->order_by('CategoryName')->get();
		$result = $query->result_array();
		if ($query->num_rows() > 0) {
			return $result;
		}
	}
}