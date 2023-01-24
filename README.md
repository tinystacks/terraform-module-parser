# @tinystacks/terraform-module-parser
A Terraform parser for the resources created by the [tinystacks-terraform-modules](https://github.com/tinystacks/tinystacks-terraform-modules.git) library.  Intended as a plugin for [@tinystacks/precloud](https://www.npmjs.com/package/@tinystacks/precloud).

## How To Use
By default, this parser plugin is included as a peer dependency of the [precloud cli](https://github.com/tinystacks/precloud) and is therefore always available, though it is deprioritized over any explicitly configured parsers.

To increase the priority of this parser, you can install this package as a dev dependency and add it to the top of the `terraformParsers` array in your smoke test config.

`npm i -D @tinystacks/terraform-module-parser`

```jsonc
{
  // ...
  "terraformParsers": [
    "@tinystacks/terraform-module-parser"
    // ...other parsers
  ]
}
```

## Suppported Resources
This module will parse the following resources from the [hashicorp/aws provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs) if they originate from a module published as part of [tinystacks-terraform-modules](https://github.com/tinystacks/tinystacks-terraform-modules.git).

1. Sqs Queues (aws_sqs_queue)
1. S3 Buckets (aws_s3_bucket)
1. Elastic IPs (aws_vpc)
1. Vpcs (aws_nat_gateway)
1. Nat Gateways (aws_eip)
1. Subnets (aws_subnet)
1. Route Table Associations (aws_route_table_association)
1. Routes (aws_route)
1. Route Tables (aws_route_table)
1. Internet Gateways (aws_internet_gateway)