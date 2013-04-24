<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Customers_model extends CI_Model {
	public $table_name = 'customers';
	
	public function __construct() {
		parent::__construct();
	}
	
	public function get_customers($customer_id = null, $limit = 10, $offset = 0) {
		$this->db->select();
		$this->db->from($this->table_name);
		
		if ($customer_id != null) {
			$this->db->where('CustomerID', $customer_id);
		}
		
		$this->db->order_by('CustomerID', 'ASC');
		$this->db->limit($limit, $offset);
		$query = $this->db->get();
		return $query->result_array();				
	}
}